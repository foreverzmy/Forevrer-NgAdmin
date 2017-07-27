import { Route } from '@angular/router';

import { LoginComponent } from './login/login.component';

export const ShareRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
