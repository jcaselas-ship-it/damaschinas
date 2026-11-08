// Service worker de Damas chinas: funciona sin conexión (salvo el modo en red)
const CACHE = 'damaschinas-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Página: primero red (para recibir actualizaciones), si no hay conexión, caché
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { caches.open(CACHE).then(c => c.put('./index.html', r.clone())); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Archivos propios y la librería PeerJS: caché primero
  if (url.origin === location.origin || url.hostname === 'unpkg.com') {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok || r.type === 'opaque') { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
      return r;
    })));
  }
});
