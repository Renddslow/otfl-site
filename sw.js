const DYN_CACHE = 'otfl_cache_v1';

(() => {
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      fetch(e.request)
        .then((res) => caches.open(DYN_CACHE).then((cache) => {
          cache.put(e.request.url, res.clone());
          return res;
        }))
        .catch(() => cache.match(e.request))
    );
  });

  self.addEventListener('install', (e) => {

  });
})();
