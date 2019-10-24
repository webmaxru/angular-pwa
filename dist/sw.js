/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
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
    "revision": "a71f23df8a4bd7e89d4a19a7b500a9c4"
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
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https:\/\/fonts.(?:googleapis|gstatic).com\/(.*)/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
