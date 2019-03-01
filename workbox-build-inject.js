const {injectManifest} = require('workbox-build')

let swSrc = process.argv.slice(2)[0] || 'service-worker.js';

let workboxConfig = {
  globDirectory: 'dist/angular-pwa',
  globPatterns: [
    'favicon.ico',
    'index.html',
    '*.css',
    '*.js'
  ],
  swSrc: 'src/' + swSrc,
  swDest: 'dist/angular-pwa/service-worker.js'
}

injectManifest(workboxConfig)
  .then(({count, size}) => {
    console.log(`Generated ${workboxConfig.swDest}, which will precache ${count} files, totaling ${size} bytes.`)
  })
