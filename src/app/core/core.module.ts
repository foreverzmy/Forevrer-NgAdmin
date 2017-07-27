import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { FormGroupComponent } from './form-group/form-group.component';
import { SidebarPipe } from './pipe/sidebar.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    FormGroupComponent,
    SidebarPipe],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SidebarPipe
  ]
})

export class CoreModule { }
