// Let's use the local version of Workbox instead of CDN
importScripts('workbox-v4.3.1/workbox-sw.js');

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
  modulePathPrefix: 'workbox-v4.3.1/'
});

// Turn on logging
workbox.setConfig({
  debug: true
});

// Modify SW update cycle
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([
  {
    "url": "3rdpartylicenses.txt",
    "revision": "3507c98437d87c444e209e4eebb8d685"
  },
  {
    "url": "assets/images/logo.png",
    "revision": "f5fd664cc80a6c77d6c79e5bd2653426"
  },
  {
    "url": "favicon.ico",
    "revision": "4f6a4dab3f3cae2985be59bfd9909605"
  },
  {
    "url": "index.html",
    "revision": "c0da98cd0bb06e8362b095f8f7b88030"
  },
  {
    "url": "main.97a3068a07010b8662e7.js",
    "revision": "4989176ab0bda518ee0fa8b13b106383"
  },
  {
    "url": "polyfills.0fa3e9588b07b25d43c2.js",
    "revision": "f61fab6f423084665a6db849a49b762d"
  },
  {
    "url": "runtime.26209474bfa8dc87a77c.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "styles.61981e6f805f82d49920.css",
    "revision": "4f3f288ce3957ce6812c4af674ce8213"
  }
]);

// RUNTIME CACHING

// Google fonts
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

// API with network-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
  new workbox.strategies.NetworkFirst()
);

// API with cache-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
  new workbox.strategies.CacheFirst()
);

// PUSH NOTIFICATIONS

// BACKGROUND SYNC

// GOOGLE ANALYTICS
