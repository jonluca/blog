importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

const { registerRoute } = workbox.routing;
const { CacheFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

workbox.core.setCacheNameDetails({
  prefix: "blog.jonlu.ca",
});

registerRoute("/", new StaleWhileRevalidate());

registerRoute(/posts/, new StaleWhileRevalidate());
registerRoute(new RegExp("/js/.*\\.js"), new StaleWhileRevalidate());
registerRoute(new RegExp("/fav/.*"), new StaleWhileRevalidate());

workbox.precaching.precacheAndRoute([
  { url: "/about" },
  { url: "/contact" },
  {
    url: "/interesting-snippets",
  },
  {
    url: "/stylesheets/buttons.css",
  },
  {
    url: "/stylesheets/style.css",
  },
  {
    url: "/stylesheets/table.css",
  },
  {
    url: "/stylesheets/highlighter.css",
  },
]);

registerRoute(
  ({ request }) => {
    return request.destination === "image";
  },
  new CacheFirst({
    plugins: [new CacheableResponse({ statuses: [0, 200, 204] })],
  })
);
