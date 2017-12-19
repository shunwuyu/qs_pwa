"use strict";

self.addEventListener("fetch", event => {
  if (/\.jpg$/.test(event.request.url)) {
    event.respondWith(
      '<p>This is  a response that comes from your service worker!</p>', {
        headers: {
          'Content-Type': 'text/html'
        }
      });
  }
});