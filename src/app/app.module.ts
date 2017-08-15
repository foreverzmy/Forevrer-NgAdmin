import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { routes } from './app.routes';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    // MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
