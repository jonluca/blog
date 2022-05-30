---
    layout: none
---
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

workbox.core.setCacheNameDetails({
    prefix: 'blog.jonlu.ca',
    suffix: '{{ site.time | date: "%Y-%m-%d" }}'
});

registerRoute(
    '/',
    new NetworkFirst()
);

registerRoute(
    /posts/,
    new StaleWhileRevalidate()
)

workbox.precaching.precacheAndRoute([
    {% for post in site.posts limit:12 -%}
{ url: '{{ post.url }}', revision: '{{ post.date | date: "%Y-%m-%d"}}' },
{% endfor -%}
{ url: '/', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
{ url: '/about', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
{ url: '/contact', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
{ url: '/interesting-snippets', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
{ url: '/stylesheets/buttons.css', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
{ url: '/stylesheets/style.css', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
{ url: '/stylesheets/footer.css', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
{ url: '/stylesheets/table.css', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' },
{ url: '/stylesheets/highlighter.css', revision: '{{ site.time | date: "%Y%m%d%H%M" }}' }
])

registerRoute(
    ({request}) => {
        return request.destination === 'image';
    },
    new CacheFirst({
        plugins: [
            new CacheableResponse({statuses: [0, 200]})
        ],
    })
);
