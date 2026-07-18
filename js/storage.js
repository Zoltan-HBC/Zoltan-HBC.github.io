/* ═══════════ HBC v8.0 — TARTÓS TÁROLÁS (IndexedDB tükör + persistent storage) ═══════════
   A localStorage marad az elsődleges (gyors, szinkron) tár, de minden mentés
   IndexedDB-be is tükröződik. Ha a localStorage kiürül (pl. böngésző-takarítás),
   induláskor az IndexedDB-ből automatikusan helyreáll. */

window.HBC_STORE = (function() {
 const DB = 'hbc-diary',
  STORE = 'kv',
  KEYS = ['hbc-v5-entries', 'hbc-v5-foods', 'hbc-v5-settings', 'hbc-v5-deleted', 'hbc-bgnote', 'hbc-lang', 'hbc-cgm', 'hbc-meta'];
 let db = null;

 function open() {
  return new Promise((res, rej) => {
   if (db) return res(db);
   const rq = indexedDB.open(DB, 1);
   rq.onupgradeneeded = () => rq.result.createObjectStore(STORE);
   rq.onsuccess = () => {
    db = rq.result;
    res(db);
   };
   rq.onerror = () => rej(rq.error);
  });
 }

 function idbSet(k, v) {
  return open().then(d => new Promise((res, rej) => {
   const tx = d.transaction(STORE, 'readwrite');
   tx.objectStore(STORE).put(v, k);
   tx.oncomplete = res;
   tx.onerror = () => rej(tx.error);
  })).catch(() => {});
 }

 function idbGet(k) {
  return open().then(d => new Promise((res, rej) => {
   const rq = d.transaction(STORE).objectStore(STORE).get(k);
   rq.onsuccess = () => res(rq.result);
   rq.onerror = () => rej(rq.error);
  })).catch(() => undefined);
 }

 /* localStorage írás elfogása: minden HBC-kulcs IndexedDB-be is kerül */
 const origSet = Storage.prototype.setItem;
 Storage.prototype.setItem = function(k, v) {
  origSet.call(this, k, v);
  if (this === window.localStorage && (k.startsWith('hbc-'))) idbSet(k, v);
 };

 /* Induláskor: hiányzó localStorage-kulcsok visszaállítása IndexedDB-ből */
 function restore() {
  return Promise.all(KEYS.map(k =>
   idbGet(k).then(v => {
    if (v !== undefined && v !== null && localStorage.getItem(k) === null) {
     origSet.call(localStorage, k, v);
    }
   })
  ));
 }

 /* Tartós tárolás kérése a böngészőtől (takarítás elleni védelem) */
 if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().catch(() => {});
 }

 /* Biztonsági mentés dátumának követése (mentés-emlékeztetőhöz) */
 function markBackup() {
  try {
   const m = JSON.parse(localStorage.getItem('hbc-meta') || '{}');
   m.lastBackup = new Date().toISOString();
   localStorage.setItem('hbc-meta', JSON.stringify(m));
  } catch (e) {}
 }

 function daysSinceBackup() {
  try {
   const m = JSON.parse(localStorage.getItem('hbc-meta') || '{}');
   if (!m.lastBackup) return Infinity;
   return (Date.now() - new Date(m.lastBackup)) / 86400000;
  } catch (e) {
   return Infinity;
  }
 }

 return {
  restore,
  markBackup,
  daysSinceBackup,
  idbGet,
  idbSet
 };
})();