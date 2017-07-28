import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { TableListComponent } from './table-list/table-list.component';
import { FormsComponent } from './forms/forms.component';
import { PanelsComponent } from './component/panels/panels.component';

@NgModule({
  imports: [
    // RouterModule.forChild(PageRoutes),
    CommonModule,
    CoreModule,
  ],
  declarations: [
    TableListComponent,
    FormsComponent,
    PanelsComponent,
  ],
  providers: [],
  exports: [],
})
export class PageModule { }
