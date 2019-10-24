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
    "url": "assets/icons/icon-128x128.png",
    "revision": "ef83aae951233f27af90648fa8b825c9"
  },
  {
    "url": "assets/icons/icon-144x144.png",
    "revision": "a455cb88bc9c224bb416401b605a4570"
  },
  {
    "url": "assets/icons/icon-152x152.png",
    "revision": "18559b786ff99db4a9c342c3a111ca90"
  },
  {
    "url": "assets/icons/icon-192x192.png",
    "revision": "7534103c22896094bbbed55c5a37269e"
  },
  {
    "url": "assets/icons/icon-384x384.png",
    "revision": "53e898b42719b989fe858571fd2263ab"
  },
  {
    "url": "assets/icons/icon-512x512.png",
    "revision": "b997df4eaa26b0e8455d9de852284fd5"
  },
  {
    "url": "assets/icons/icon-72x72.png",
    "revision": "04cc09572092242152768a313432a0fa"
  },
  {
    "url": "assets/icons/icon-96x96.png",
    "revision": "9434e61a9e6eb19b1c588b06d7afd7e8"
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
    "revision": "532a1b138fd817ae4a3581a82213690b"
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
