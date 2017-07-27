import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageRoutes } from '../page/page.routes';

export const MainRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    data: { label: 'Home', icon: 'home' },
    children: [...PageRoutes]
  }
];
