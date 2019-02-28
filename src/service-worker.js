importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js')

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({debug: true})

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting()
workbox.core.clientsClaim()

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([])
