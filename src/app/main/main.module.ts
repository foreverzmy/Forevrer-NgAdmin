import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainRoutes } from './main.routes';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PageModule } from '../page/page.module';

@NgModule({
  imports: [
    RouterModule.forChild(MainRoutes),
    CommonModule,
    CoreModule,
    PageModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
  ],
  providers: [],
  exports: [],
})
export class MainModule { }
