/* ═══════════ HBC v8.0 — GOOGLE DRIVE SZINKRON ("Andi mód") ═══════════
   Tulajdonos mód:  a napló automatikus feltöltése a kiválasztott Drive-mappába.
   Követő mód:      a megosztott naplófájl időzített beolvasása + riasztások.
   Jogosultság:     drive.file — az app CSAK az általa létrehozott / a felhasználó
                    által kiválasztott fájlhoz fér hozzá, semmi máshoz.
   A szinkron csak internettel működik; offline állapotban a feltöltés
   automatikusan pótlódik, amint visszatér a kapcsolat. */

window.HBC_SYNC = (function () {
  const SCOPE = 'https://www.googleapis.com/auth/drive.file';
  const FILE_NAME = 'HBC_Diabetesz_Naplo.json';
  let tokenClient = null, accessToken = null, tokenExp = 0;
  let cfg = { mode: 'off', clientId: '', folderId: '', folderName: '', fileId: '', fileName: '', minutes: 5 };
  let pendingPush = null, pollTimer = null;
  let listeners = { status: [], data: [] };

  function loadCfg() {
    try { Object.assign(cfg, JSON.parse(localStorage.getItem('hbc-drive') || '{}')); } catch (e) {}
    /* v10.1: token localStorage-ban — az ablak bezárása után is megmarad
       (a sessionStorage minden induláskor kiürült → felesleges újra-bejelentkezés).
       A token max. ~1 óráig érvényes, lejárat után csendes megújítás megy először. */
    accessToken = localStorage.getItem('hbc-drive-token') || sessionStorage.getItem('hbc-drive-token') || null;
    tokenExp = parseInt(localStorage.getItem('hbc-drive-exp') || sessionStorage.getItem('hbc-drive-exp') || '0');
  }
  function saveCfg() { localStorage.setItem('hbc-drive', JSON.stringify(cfg)); emit('status'); }
  function emit(type, payload) { (listeners[type] || []).forEach(f => { try { f(payload); } catch (e) {} }); }
  function on(type, f) { listeners[type].push(f); }

  /* ── Google szkriptek betöltése (csak online, csak amikor kell) ── */
  function loadScript(src) {
    return new Promise((res, rej) => {
      if (document.querySelector('script[src="' + src + '"]')) return res();
      const s = document.createElement('script');
      s.src = src; s.onload = res; s.onerror = () => rej(new Error('Nem tölthető be: ' + src));
      document.head.appendChild(s);
    });
  }

  /* ── Bejelentkezés (Google Identity Services) ──
     v10.1: (1) érvényes tárolt token → semmilyen ablak nem nyílik;
     (2) először MINDIG csendes kérés (prompt:'') — ha van élő Google-munkamenet
     és korábbi hozzájárulás, az ablak magától bezáródik, kattintás nélkül;
     (3) teljes consent-képernyő CSAK akkor, ha a csendes kérés meghiúsul
     és a hívás felhasználói művelethez kötött (interactive). */
  function requestToken(promptVal) {
    return new Promise((res, rej) => {
      tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: cfg.clientId,
        scope: SCOPE,
        callback: (r) => {
          if (r.error) return rej(new Error(r.error));
          accessToken = r.access_token;
          tokenExp = Date.now() + (parseInt(r.expires_in) || 3600) * 1000;
          localStorage.setItem('hbc-drive-token', accessToken);
          localStorage.setItem('hbc-drive-exp', String(tokenExp));
          res(accessToken);
        },
        error_callback: (e) => rej(new Error((e && e.type) || 'popup_error'))
      });
      tokenClient.requestAccessToken({ prompt: promptVal });
    });
  }
  function ensureToken(interactive) {
    if (accessToken && Date.now() < tokenExp - 60000) return Promise.resolve(accessToken);
    return loadScript('https://accounts.google.com/gsi/client')
      .then(() => requestToken(''))
      .catch(err => {
        if (interactive) return requestToken('consent');
        throw err;
      });
  }
  function clearToken() {
    accessToken = null; tokenExp = 0;
    localStorage.removeItem('hbc-drive-token'); localStorage.removeItem('hbc-drive-exp');
    sessionStorage.removeItem('hbc-drive-token'); sessionStorage.removeItem('hbc-drive-exp');
  }

  /* ── Mappa- / fájlválasztó (Google Picker) ── */
  function openPicker(kind) { // kind: 'folder' | 'file'
    return ensureToken(true)
      .then(() => loadScript('https://apis.google.com/js/api.js'))
      .then(() => new Promise(res => gapi.load('picker', res)))
      .then(() => new Promise((res, rej) => {
        const g = google.picker;
        let view;
        if (kind === 'folder') {
          view = new g.DocsView(g.ViewId.FOLDERS).setSelectFolderEnabled(true).setIncludeFolders(true).setOwnedByMe(true);
        } else {
          view = new g.DocsView(g.ViewId.DOCS).setIncludeFolders(true).setEnableDrives(false);
        }
        const picker = new g.PickerBuilder()
          .addView(view)
          .setOAuthToken(accessToken)
          .setSelectableMimeTypes(kind === 'folder' ? 'application/vnd.google-apps.folder' : 'application/json,text/plain')
          .setCallback(d => {
            if (d.action === g.Action.PICKED) {
              const doc = d.docs[0];
              res({ id: doc.id, name: doc.name });
            } else if (d.action === g.Action.CANCEL) rej(new Error('cancel'));
          })
          .build();
        picker.setVisible(true);
      }));
  }

  /* ── Drive REST hívások ── */
  function api(path, opts) {
    opts = opts || {};
    opts.headers = Object.assign({ Authorization: 'Bearer ' + accessToken }, opts.headers || {});
    return fetch('https://www.googleapis.com/' + path, opts).then(r => {
      if (r.status === 401) { clearToken(); } /* v10.1: lejárt/visszavont token → következő hívás újat kér */
      if (!r.ok) throw new Error('Drive API hiba: ' + r.status);
      return r;
    });
  }

  function findOrCreateFile() {
    if (cfg.fileId) return Promise.resolve(cfg.fileId);
    const q = encodeURIComponent("name='" + FILE_NAME + "' and '" + cfg.folderId + "' in parents and trashed=false");
    return api('drive/v3/files?q=' + q + '&fields=files(id,name)').then(r => r.json()).then(j => {
      if (j.files && j.files.length) { cfg.fileId = j.files[0].id; saveCfg(); return cfg.fileId; }
      const meta = { name: FILE_NAME, parents: [cfg.folderId], mimeType: 'application/json' };
      const boundary = 'hbc' + Date.now();
      const body = '--' + boundary + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' +
        JSON.stringify(meta) + '\r\n--' + boundary + '\r\nContent-Type: application/json\r\n\r\n{}\r\n--' + boundary + '--';
      return api('upload/drive/v3/files?uploadType=multipart&fields=id', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/related; boundary=' + boundary },
        body
      }).then(r => r.json()).then(j2 => { cfg.fileId = j2.id; saveCfg(); return cfg.fileId; });
    });
  }

  /* ── Tulajdonos: feltöltés (mentésenként, késleltetve összevonva) ── */
  function push(payloadObj) {
    if (cfg.mode !== 'owner' || !cfg.clientId || !cfg.folderId) return;
    clearTimeout(pendingPush);
    pendingPush = setTimeout(() => doPush(payloadObj), 4000);
  }
  function doPush(payloadObj) {
    const body = JSON.stringify(Object.assign({ _hbc: 'v7', _updated: new Date().toISOString() }, payloadObj));
    ensureToken(false)
      .then(findOrCreateFile)
      .then(id => api('upload/drive/v3/files/' + id + '?uploadType=media', {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body
      }))
      .then(() => {
        cfg.lastSync = new Date().toISOString(); saveCfg();
        if (window.HBC_STORE) window.HBC_STORE.markBackup();
      })
      .catch(() => { /* offline vagy hiba: következő mentésnél/online eseménynél újra */ });
  }

  /* ── Követő: letöltés + riasztás ── */
  function pull() {
    if (cfg.mode !== 'follower' || !cfg.clientId || !cfg.fileId) return Promise.resolve(null);
    return ensureToken(false)
      .then(() => api('drive/v3/files/' + cfg.fileId + '?alt=media'))
      .then(r => r.json())
      .then(j => {
        cfg.lastSync = new Date().toISOString(); saveCfg();
        emit('data', j);
        checkAlerts(j);
        return j;
      })
      .catch(() => null);
  }

  function startPolling() {
    stopPolling();
    if (cfg.mode === 'follower' && cfg.fileId) {
      pull();
      pollTimer = setInterval(pull, Math.max(1, cfg.minutes || 5) * 60000);
    }
  }
  function stopPolling() { if (pollTimer) { clearInterval(pollTimer); pollTimer = null; } }

  /* ── Riasztások (követő oldalon, beállítható) ── */
  let lastAlertTs = null;
  function checkAlerts(data) {
    try {
      const a = (data && data.settings) || {};
      const al = JSON.parse(localStorage.getItem('hbc-alerts') || '{"lowOn":true,"highOn":false,"notifOn":false}');
      if (!al.notifOn || !('Notification' in window) || Notification.permission !== 'granted') return;
      /* v9: a kézi bejegyzések MELLETT a megosztott CGM-mérések is riasztási alapok */
      const manual = (data.entries || []).filter(e => e.bloodGlucose)
        .map(e => ({ timestamp: e.timestamp, bloodGlucose: e.bloodGlucose }));
      const cgm = (data.cgm || []).filter(r => r && r.v)
        .map(r => ({ timestamp: r.ts, bloodGlucose: r.v }));
      const entries = manual.concat(cgm);
      if (!entries.length) return;
      const newest = entries.slice().sort((x, y) => new Date(y.timestamp) - new Date(x.timestamp))[0];
      /* v9: riasztás CSAK az AZNAPI, aktuális mérésre — régebbi (utólag rögzített)
         érték soha nem vált riasztást */
      const d = new Date(); const todayISO = [d.getFullYear(),
        String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
      if (String(newest.timestamp).slice(0, 10) !== todayISO) return;
      if (newest.timestamp === lastAlertTs) return; // ugyanarra az értékre csak egyszer
      const low = a.lowBG != null ? a.lowBG : 3.9, high = a.highBG != null ? a.highBG : 10.0;
      const v = parseFloat(newest.bloodGlucose);
      const u = window.bgU;
      if (al.lowOn && v < low) {
        new Notification('HBC Napló – ' + window.t('Riasztás alacsony értéknél'), {
          body: '🩸 ' + u.disp(v) + ' ' + u.label() + ' (' + new Date(newest.timestamp).toLocaleString() + ')',
          icon: 'icons/icon-192.png', tag: 'hbc-low'
        });
        lastAlertTs = newest.timestamp;
      } else if (al.highOn && v > high) {
        new Notification('HBC Napló – ' + window.t('Riasztás magas értéknél'), {
          body: '🩸 ' + u.disp(v) + ' ' + u.label() + ' (' + new Date(newest.timestamp).toLocaleString() + ')',
          icon: 'icons/icon-192.png', tag: 'hbc-high'
        });
        lastAlertTs = newest.timestamp;
      }
    } catch (e) {}
  }

  /* Online esemény: elmaradt szinkron pótlása */
  window.addEventListener('online', () => { if (cfg.mode === 'follower') pull(); });

  loadCfg();
  return {
    cfg, on, saveCfg, ensureToken, openPicker, push, pull, startPolling, stopPolling,
    setMode(m) { cfg.mode = m; saveCfg(); if (m === 'follower') startPolling(); else stopPolling(); },
    isConfigured() { return !!(cfg.clientId && (cfg.folderId || cfg.fileId)); }
  };
})();
