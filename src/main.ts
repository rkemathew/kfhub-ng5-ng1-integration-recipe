import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environmentReader } from 'kfhub_lib';

environmentReader.then((environment) => {
  if (environment['production']) {
      enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.log(err));
});