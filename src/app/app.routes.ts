import { Route, RouterModule } from '@angular/router';

import { ShareRoutes } from './shared/shared.routes';

const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  }, {
    path: 'auth',
    children: [...ShareRoutes]
  }, {
    path: 'main',
    loadChildren: './main/main.module#MainModule'
  }, {
    path: '**',
    redirectTo: 'auth',
  }
];

export const routes = RouterModule.forRoot(appRoutes);
