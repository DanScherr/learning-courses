import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'hammerjs'; // README-INTRO 1.4.

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
