import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { FormsComponent } from './forms/forms.component';
import { PanelsComponent } from './component/panels/panels.component';
import { BaseTableComponent } from './tables/base-table/base-table.component';
import { DropTableComponent } from './tables/drop-table/drop-table.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
  ],
  declarations: [
    FormsComponent,
    PanelsComponent,
    BaseTableComponent,
    DropTableComponent,
  ],
  providers: [],
  exports: [],
})
export class PageModule { }
