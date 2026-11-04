/* Service worker del dashboard Riftbound.
 *
 * Estrategia network-first con fallback a caché: siempre intenta traer datos
 * frescos, pero si no hay conexión sirve la última versión cacheada (la app
 * abre al instante en el móvil y funciona offline con los últimos datos).
 */
const CACHE = 'riftbound-v2';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then(resp => {
        if (resp.ok) {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return resp;
      })
      // ignoreSearch: los datos se piden con ?t=<timestamp> anti-caché;
      // para el fallback offline nos vale cualquier versión guardada.
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
