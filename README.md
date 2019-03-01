# Demo of Workbox-driven (v4) bundled service worker

## Slides
[Sending the Angular app into deep, deep offline with Workbox](https://slides.com/webmax/angular-workbox/)

## Prerequisites
1. Latest stable versions of `node`, `npm` installed.
2. Static web server with SPA support:
- [serve](https://www.npmjs.com/package/serve). Recommended and pre-configured.
- [superstatic](https://www.npmjs.com/package/superstatic). Use this as a fallback option.

## Install
1. Clone the repo
2. 
```bash
git checkout workbox-v4-bundle
npm install
```

## Install/update Angular CLI
```bash
npm uninstall -g angular-cli
npm uninstall -g @angular/cli
npm cache clean
npm install -g @angular/cli@latest
```

Check the version:
```bash
npm list @angular/cli version -g
```
The output should be at least `6.x.x`

## Checking the app
1. In the terminal
```bash
ng serve
```
2. Open [http://localhost:4200/](http://localhost:4200/). You should see the page with `Angular PWA` header.
3. "Ctrl-C" to stop the app.

## Creating a production build and serving it via external web server
```bash
npm run build-pwa-bundle
```
The `dist/angular-pwa` folder should be created.

- If you use `serve`: Run `serve` and open `http://127.0.0.1:5000` in your browser.

You should see the page with `Angular PWA` header.

## We are ready to start the workshop! Follow the trainer instructions.