import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';
import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';

import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import { HttpInterceptorService } from '../services/http-interceptor/http-interceptor.service';

import { FormGroupComponent } from './form-group/form-group.component';
import { SidebarPipe } from './pipe/sidebar.pipe';

/** 请求拦截
 * @param  {XHRBackend} backend
 * @param  {RequestOptions} defaultOptions
 * @param  {NotificationsService} notificationsService
 */
const interceptorFactory = (backend: XHRBackend, defaultOptions: RequestOptions, notificationsService: NotificationsService) => {
  return new HttpInterceptorService(backend, defaultOptions, notificationsService);
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    MdNativeDateModule,
    CdkTableModule,
    SimpleNotificationsModule,
  ],
  declarations: [
    FormGroupComponent,
    SidebarPipe],
  providers: [
    NotificationsService,
    HttpInterceptorService,
    {
      provide: Http,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions]
    },
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    SidebarPipe,
    CdkTableModule,
    SimpleNotificationsModule,
  ]
})

export class CoreModule { }
