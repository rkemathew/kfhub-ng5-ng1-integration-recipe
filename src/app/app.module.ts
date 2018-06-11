import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { NgIdleModule } from '@ng-idle/core/src/module';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { KfSharedModule, KfComponentsModule, KfPopupService, KfUtilsService, KfDialogService, KfCacheService, KfAuthGuardService } from 'kfhub_lib';

import { AppComponent } from './app.component';
import { MainComponentsModule } from './modules/main/main-components.module';

export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './languages/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { useHash: true }),
    HttpClientModule,
    ModalModule.forRoot(),
    NgHttpLoaderModule,
    NgIdleModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient],
      },
  }),
    BootstrapModalModule,
    KfSharedModule,
    KfComponentsModule,
    MainComponentsModule,
  ],
  providers: [
    TranslateService,
    KfPopupService,
    KfUtilsService,
    KfDialogService,
    KfCacheService,
    KfAuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
