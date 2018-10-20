const {injectManifest} = require('workbox-build')

var workboxConfig = {
  globDirectory: 'dist/angular-pwa',
  globPatterns: [
    '**/*.{txt,png,ico,html,js,json,css,eot,ijmap,ttf,woff,woff2}'
  ],
  globIgnores: [
    'workbox-v3.6.2/**/*'
  ],
  swSrc: 'src/service-worker.js',
  swDest: 'dist/angular-pwa/sw.js'
}

injectManifest(workboxConfig)
  .then(({count, size}) => {
    console.log(`Generated ${workboxConfig.swDest}, which will precache ${count} files, totaling ${size} bytes.`)
  })
