module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{txt,png,ico,html,js,css}"
  ],
  "swDest": "dist\\sw.js",
  "runtimeCaching": [
    {
      "urlPattern": new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
      "handler": 'staleWhileRevalidate'
    }
  ]
};