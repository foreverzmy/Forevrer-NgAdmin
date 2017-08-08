import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CityService } from './forms/city.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
  ],
  providers: [CityService],
  exports: [],
})
export class ServicesModule { }
