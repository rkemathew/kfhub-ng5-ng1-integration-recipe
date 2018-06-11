import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppMainComponent } from './components/app-main.component';

@NgModule({
    declarations: [
        AppMainComponent,
    ],
    exports: [
        AppMainComponent,
    ],
    entryComponents: [
        AppMainComponent,
    ],
    providers: [
    ],
})
export class MainComponentsModule { }
