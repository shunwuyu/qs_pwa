const cacheName = 'latestNews-v1';

// precache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll([
      './js/main.js',
      './js/article.js',
      './images/newspaper.svg',
      './css/site.css',
      './data/latest.json',
      './article.html',
      './index.html'
    ]))
  );
});

// self.addEventListener('fetch', event => {
//   event.respondWith()
// })