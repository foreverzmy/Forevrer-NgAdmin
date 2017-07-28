import { Route } from '@angular/router';

import { TableListComponent } from './table-list/table-list.component';
import { FormsComponent } from './forms/forms.component';
import { PanelsComponent } from './component/panels/panels.component';

export const PageRoutes: Route[] = [
  {
    path: 'tableList',
    component: TableListComponent,
    data: {
      label: 'Tables',
      icon: 'border_all',
      sidebar: true
    }
  }, {
    path: 'forms',
    component: FormsComponent,
    data: {
      label: 'Forms',
      icon: 'border_color',
      sidebar: true
    }
  }, {
    path: 'component',
    data: {
      label: 'Component',
      icon: 'view_quilt',
      sidebar: false
    },
    children: [{
      path: 'panels',
      component: PanelsComponent,
      data: {
        label: 'Panels',
        icon: 'view_quilt',
        sidebar: true
      }
    }]
  }
];
