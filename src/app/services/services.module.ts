import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CoreModule } from '../core/core.module';

import { HttpInterceptorService } from './http-interceptor/http-interceptor.service';
import { CityService } from './forms/city.service';
import { TiobeService } from './table/tiobe.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule
  ],
  declarations: [
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    CityService,
    TiobeService
  ],
  exports: [],
})
export class ServicesModule { }
