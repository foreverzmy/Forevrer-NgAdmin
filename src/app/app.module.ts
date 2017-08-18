import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

import { CoreModule } from './core/core.module';
import { routes } from './app.routes';
import { ServicesModule } from './services/services.module';

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
    CoreModule,
    ServicesModule,
    SharedModule,
    SimpleNotificationsModule,
    // MainModule
  ],
  providers: [
    NotificationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
