/* HBC Diabétesz Napló v11.0 — Service Worker
   v10.1 JAVÍTÁS: a korábbi sw.js csonkolt volt (szintaktikai hiba), ezért a
   böngésző sosem tudta lecserélni a régi (v8) workert — a régi verzió ragadt be.
   Új stratégia:
   - App-fájlok (html/js/css/manifest): NETWORK-FIRST — online mindig a friss
     verzió töltődik, offline a cache-ből. Új verziónál nincs több "beragadás".
   - Fontok/ikonok (nem változnak): CACHE-FIRST a gyorsaságért.
   - Google/Drive kérések: érintetlenül átmennek a hálózatra. */
const CACHE = 'hbc-v11.0.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/fonts.css',
  './css/app.css',
  './css/custom.css',
  './lib/react.production.min.js',
  './lib/react-dom.production.min.js',
  './lib/chart.umd.min.js',
  './js/i18n.js',
  './js/storage.js',
  './js/sync.js',
  './js/cgm.js',
  './js/app.js',
  './icons/logo.png',
  './icons/TypeOneDiab_logo.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './fonts/nunito-latin-400-normal.woff2',
  './fonts/nunito-latin-600-normal.woff2',
  './fonts/nunito-latin-700-normal.woff2',
  './fonts/nunito-latin-800-normal.woff2',
  './fonts/nunito-latin-900-normal.woff2',
  './fonts/nunito-latin-ext-400-normal.woff2',
  './fonts/nunito-latin-ext-600-normal.woff2',
  './fonts/nunito-latin-ext-700-normal.woff2',
  './fonts/nunito-latin-ext-800-normal.woff2',
  './fonts/nunito-latin-ext-900-normal.woff2'
];

/* Cache-first körbe tartozó, ritkán változó fájlok */
const STATIC_RE = /\.(woff2|png|ico)$/;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // Drive/Google kérések: mindig hálózat
  if (e.request.method !== 'GET') return;

  if (STATIC_RE.test(url.pathname)) {
    /* Fontok, ikonok: cache-first */
    e.respondWith(
      caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      }))
    );
    return;
  }

  /* App-fájlok: network-first, offline fallback a cache-re */
  e.respondWith(
    fetch(e.request).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return res;
    }).catch(() =>
      caches.match(e.request, { ignoreSearch: true })
        .then(hit => hit || caches.match('./index.html'))
    )
  );
});
