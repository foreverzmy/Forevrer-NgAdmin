import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageRoutes } from '../page/page.routes';

export const MainRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    data: { label: '主页', icon: 'home' },
    children: [...PageRoutes]
  }
];
