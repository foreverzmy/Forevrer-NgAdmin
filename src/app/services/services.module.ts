import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CityService } from './forms/city.service';
import { TiobeService } from './table/tiobe.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
  ],
  providers: [
    CityService,
    TiobeService
  ],
  exports: [],
})
export class ServicesModule { }
