const cacheName = 'helloWorld';

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (response) {
        return response;
      }

      // 请求是一个流， 只能消一次
      var requestToCache = event.request.clone();
      return fetch(requestToCache).then(
        response => {
          if (!response || response.status !== 200) {
            return response;
          }

          let responseToCache = response.clone();
          caches.open(cacheName)
            .then(cache => {
              cache.put(requestToCache, responseToCache);
            });
          return response;
        }
      );
    })
  );
});