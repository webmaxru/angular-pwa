import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute.mjs'
import { skipWaiting } from 'workbox-core/skipWaiting.mjs'
import { clientsClaim } from 'workbox-core/clientsClaim.mjs'

// SETTINGS

// Updating SW lifecycle to update the app after user triggered refresh
skipWaiting()
clientsClaim()

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
precacheAndRoute([])
