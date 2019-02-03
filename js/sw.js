/*
 *
 *  Air Horner
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

const version = "1.0";
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
  console.log('Service Worker Fetch...');

  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (event.request.url.indexOf('facebook') > -1) {
          return fetch(event.request);
        }
        if (response) {
          console.log('Serve from cache', response);
          return response;
        }
        return fetch(event.request)
          .then(response =>
            caches.open(cacheName)
              .then((cache) => {
                // cache response after making a request
                cache.put(event.request, response.clone());
                // return original response
                return response;
              })
          );
      }));
});