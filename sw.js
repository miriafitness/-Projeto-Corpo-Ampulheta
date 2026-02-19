const CACHE = "miria-sculpt-pwa-v3"; // troque o número se precisar forçar atualização

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.webmanifest",
        "./icon-192.png",
        "./icon-512.png"
      ])
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k !== CACHE ? caches.delete(k) : null)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
