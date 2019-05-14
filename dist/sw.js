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
    "revision": "0bc833d0d9232ee71e490b997452c182"
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
    "revision": "da84d7f973db1f08e3e88e1cf8f73f1d"
  },
  {
    "url": "main.ec460fd130b082fe2ebf.js",
    "revision": "0cd2f6d6084bf627a122e1b1f0c3f9ac"
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
