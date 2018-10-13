import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { register } from 'register-service-worker'

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then( () => {
    register('sw.js', {
      updated (registration) {
        if (confirm(`New content is available!. Click OK to refresh`)) {
            window.location.reload();
        }
      }
    })
  })
  .catch(err => console.error(err));

