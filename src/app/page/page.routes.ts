import { Route } from '@angular/router';

import { TableListComponent } from './table-list/table-list.component';
import { FormsComponent } from './forms/forms.component';

export const PageRoutes: Route[] = [
  {
    path: 'tableList',
    component: TableListComponent,
    data: {
      label: '表格',
      icon: 'border_all',
      sidebar: true
    }
  }, {
    path: 'forms',
    component: FormsComponent,
    data: {
      label: '表单',
      icon: 'border_color',
      sidebar: true
    }
  },
];
