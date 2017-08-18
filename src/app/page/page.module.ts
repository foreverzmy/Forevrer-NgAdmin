import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '../core/core.module';
import { PanelsComponent } from './component/panels/panels.component';
import { BaseTableComponent } from './tables/base-table/base-table.component';
import { DropTableComponent } from './tables/drop-table/drop-table.component';
import { BaseFormComponent } from './forms/base-form/base-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { DialogComponent, OpenDialogComponent, SelectDialogComponent } from './component/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
  ],
  declarations: [
    BaseTableComponent,
    DropTableComponent,
    ReactiveFormComponent,
    BaseFormComponent,
    PanelsComponent,
    TabsComponent,
    NotificationsComponent,
    DialogComponent,
    OpenDialogComponent,
    SelectDialogComponent,
  ],
  providers: [],
  exports: [],
  entryComponents: [
    OpenDialogComponent,
    SelectDialogComponent
  ]
})
export class PageModule { }
