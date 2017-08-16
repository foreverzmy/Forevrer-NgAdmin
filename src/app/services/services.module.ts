import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';

import { CityService } from './forms/city.service';
import { TiobeService } from './table/tiobe.service';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
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
