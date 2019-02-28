import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Workbox } from 'workbox-window';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    if ('serviceWorker' in navigator) {

      const wb = new Workbox('service-worker.js');

      wb.addEventListener('installed', event => {
        if (event.isUpdate) {
          if (confirm(`New content is available!. Click OK to refresh`)) {
            window.location.reload();
          }
        }
      });

      wb.register();
    }
  })
  .catch(err => console.error(err));
