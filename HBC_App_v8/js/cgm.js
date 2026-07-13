/* ═══════════ HBC v8.0 — CGM ELŐKÉSZÍTÉS ═══════════
   Jelen: LibreView / Dexcom Clarity CSV-export importja (szenzoros adatok
   megjelenítése a grafikonokon, ujjbegyes mérésekkel vegyesen).
   Jövő: bővíthető illesztőréteg (adapter) élő eszköz-csatlakozáshoz. */

window.HBC_CGM = (function () {
  const KEY = 'hbc-cgm';
  const MAX_DAYS = 92; // ~3 hónapnyi 15 perces adat még kényelmesen elfér

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; }
  }
  function save(list) {
    // időrend + duplikátum-szűrés + méretkorlát
    const seen = {};
    const clean = list.filter(r => {
      const k = r.ts + '|' + r.v;
      if (seen[k]) return false; seen[k] = 1; return true;
    }).sort((a, b) => new Date(a.ts) - new Date(b.ts));
    const cutoff = Date.now() - MAX_DAYS * 86400000;
    const trimmed = clean.filter(r => new Date(r.ts) >= cutoff);
    localStorage.setItem(KEY, JSON.stringify(trimmed));
    return trimmed;
  }

  /* ── CSV-import: automatikus formátum-felismerés ── */
  function importCSV(text) {
    const lines = text.split(/\r?\n/).filter(l => l.trim());
    if (!lines.length) throw new Error('Üres fájl');
    /* a valódi fejlécsor: idő-oszlop ÉS glükóz-oszlop is szerepel benne
       (a LibreView 1. sora csak metaadat, azt át kell ugrani) */
    let headIdx = lines.findIndex(l => /glucose|glukóz/i.test(l) && /timestamp|időpont|date|idő/i.test(l));
    if (headIdx === -1) headIdx = lines.findIndex(l => /glucose|glukóz|cukor/i.test(l) && l.split(/[;,]/).length >= 3);
    if (headIdx === -1) throw new Error('Nem ismerhető fel CGM CSV formátum');
    const sep = lines[headIdx].includes(';') ? ';' : ',';
    const head = lines[headIdx].split(sep).map(c => c.replace(/(^"|"$)/g, '').trim());

    const mgdl = head.some(c => /mg\s*\/\s*dl/i.test(c));
    const F = 18.016;
    let tsCol = head.findIndex(c => /timestamp|időpont|device timestamp/i.test(c));
    if (tsCol === -1) tsCol = 0;

    /* LibreView: 'Historic Glucose', 'Scan Glucose' oszlopok; Dexcom: 'Glucose Value' */
    const valCols = head.map((c, i) => (/glucose|glukóz/i.test(c) && !/rate|unit/i.test(c)) ? i : -1).filter(i => i >= 0);
    if (!valCols.length) throw new Error('Nincs glükóz-oszlop a fájlban');

    const out = [];
    for (let i = headIdx + 1; i < lines.length; i++) {
      const cells = lines[i].split(sep).map(c => c.replace(/(^"|"$)/g, '').trim());
      if (cells.length < 2) continue;
      const rawTs = cells[tsCol];
      const d = parseDate(rawTs);
      if (!d) continue;
      for (const vc of valCols) {
        const raw = (cells[vc] || '').replace(',', '.');
        const v = parseFloat(raw);
        if (!isNaN(v) && v > 0) {
          out.push({ ts: d.toISOString(), v: mgdl ? Math.round(v / F * 100) / 100 : v, src: 'cgm' });
          break; // soronként egy érték elég (Historic VAGY Scan)
        }
      }
    }
    if (!out.length) throw new Error('Nem található érvényes mérés a fájlban');
    const merged = save(load().concat(out));
    return { imported: out.length, total: merged.length };
  }

  function parseDate(s) {
    if (!s) return null;
    // ISO, 'YYYY-MM-DD HH:MM', 'DD-MM-YYYY HH:MM', 'MM/DD/YYYY HH:MM' formátumok
    /* közvetlen Date-értelmezés CSAK ISO-jellegű (évvel kezdődő) formátumnál —
       különben a JS a "01-07-2026"-ot tévesen amerikaiként (jan. 7.) olvasná */
    let d;
    if (/^\d{4}-\d{1,2}-\d{1,2}/.test(s)) {
      d = new Date(s.replace(' ', 'T'));
      if (!isNaN(d)) return d;
    }
    let m = s.match(/(\d{1,2})([\/\-\.])(\d{1,2})[\/\-\.](\d{4})\s+(\d{1,2}):(\d{2})/);
    if (m) {
      const a = parseInt(m[1]), b = parseInt(m[3]), slash = m[2] === '/';
      /* LibreView (EU): NN-HH-ÉÉÉÉ (nap először); perjeles amerikai export: HH/NN/ÉÉÉÉ */
      let day, mon;
      if (a > 12) { day = a; mon = b; }
      else if (b > 12) { day = b; mon = a; }
      else if (slash) { mon = a; day = b; }
      else { day = a; mon = b; }
      d = new Date(parseInt(m[4]), mon - 1, day, parseInt(m[5]), parseInt(m[6]));
      if (!isNaN(d)) return d;
    }
    return null;
  }

  /* ── Lekérdezés a grafikonokhoz ── */
  function getRange(fromISO, toISO) {
    const f = new Date(fromISO + 'T00:00:00'), t = new Date(toISO + 'T23:59:59');
    return load().filter(r => { const d = new Date(r.ts); return d >= f && d <= t; });
  }
  function count() { return load().length; }
  function clearAll() { localStorage.setItem(KEY, '[]'); }

  /* ── ILLESZTŐRÉTEG A JÖVŐBENI ÉLŐ ESZKÖZÖKHÖZ ──
     Új eszköz támogatása: registerAdapter({id, name, connect(), onReading(cb)})
     A connect() Web Bluetooth-t vagy gyártói API-t használhat majd. */
  const adapters = [];
  function registerAdapter(a) { adapters.push(a); }
  function getAdapters() { return adapters.slice(); }

  return { importCSV, getRange, count, clearAll, registerAdapter, getAdapters };
})();
