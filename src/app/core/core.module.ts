import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk';

import { FormGroupComponent } from './form-group/form-group.component';
import { SidebarPipe } from './pipe/sidebar.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MdNativeDateModule,
    CdkTableModule,
  ],
  declarations: [
    FormGroupComponent,
    SidebarPipe,
  ],
  providers: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CdkTableModule,
    SidebarPipe,
  ]
})

export class CoreModule { }
