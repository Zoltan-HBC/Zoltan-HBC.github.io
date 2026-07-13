/* HBC Diabétesz Napló v8.0 — Service Worker (offline működés) */
const CACHE = 'hbc-v8.0.0';
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

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Cache-first az app-fájlokra; hálózati kérések (Drive API) érintetlenül átmennek */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return; // Drive/Google kérések: mindig hálózat
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && e.request.method === 'GET') {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
/* v8.0 */
