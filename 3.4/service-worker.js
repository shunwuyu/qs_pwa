var cacheName = 'helloWorld';

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      }

      var fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(
        function(fetchResponse) {
          if(!fetchResponse || fetchResponse.status !== 200) {
            return fetchResponse;
          }

          var responseToCache = fetchResponse.clone();

          caches.open(cacheName)
          .then(function(cache) {
            // console.log(event.request);
            cache.put(event.request, responseToCache);
          });

          return fetchResponse;
        }
      );
    })
  );
});