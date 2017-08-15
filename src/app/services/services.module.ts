import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { NotificationsService } from 'angular2-notifications';

import { HttpInterceptorService } from './http-interceptor/http-interceptor.service';

import { CityService } from './forms/city.service';
import { TiobeService } from './table/tiobe.service';


// 请求拦截
const interceptorFactory = (backend: XHRBackend, defaultOptions: RequestOptions, notificationsService: NotificationsService) => {
  return new HttpInterceptorService(backend, defaultOptions, notificationsService);
};

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
  ],
  providers: [
    // NotificationsService,
    // HttpInterceptorService,
    // {
    //   provide: Http,
    //   useFactory: interceptorFactory,
    //   deps: [XHRBackend, RequestOptions, NotificationsService]
    // },
    CityService,
    TiobeService
  ],
  exports: [],
})
export class ServicesModule { }
