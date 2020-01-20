const version = "1.1";
const cacheName = `blog-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/about',
        '/fav/favicon.ico',
        '/contact'
      ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(cacheName).then(function (cache) {
      return fetch(event.request).then(function (response) { // always make network request
        if(event && event.request && event.request.method === 'GET'){
          cache.put(event.request, response.clone()); // save in cache
        }
        return response;
      }).catch(function () {
        return caches.match(event.request); // if network fails, try to respond from cache
      });
    })
  );
});
