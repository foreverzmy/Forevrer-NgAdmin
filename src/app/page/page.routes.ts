import { Route } from '@angular/router';

import { BaseFormComponent } from './forms/base-form/base-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { PanelsComponent } from './component/panels/panels.component';
import { BaseTableComponent } from './tables/base-table/base-table.component';
import { DropTableComponent } from './tables/drop-table/drop-table.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { DialogComponent } from './component/dialog/dialog.component';

export const PageRoutes: Route[] = [{
  path: 'forms',
  data: {
    label: 'Forms',
    icon: 'border_color',
    sidebar: false
  },
  children: [{
    path: 'baseForm',
    component: BaseFormComponent,
    data: {
      label: 'Base Forms',
      icon: 'playlist_add',
      sidebar: true
    }
  }, {
    path: 'reactiveForm',
    component: ReactiveFormComponent,
    data: {
      label: 'Reactive Forms',
      icon: 'note_add',
      sidebar: true
    }
  }]
}, {
  path: 'tables',
  data: {
    label: 'Tables',
    icon: 'border_all',
    sidebar: false
  },
  children: [{
    path: 'baseTable',
    component: BaseTableComponent,
    data: {
      label: 'Base Table',
      icon: 'format_list_bulleted',
      sidebar: true
    }
  }, {
    path: 'dropTable',
    component: DropTableComponent,
    data: {
      label: 'Drop Table',
      icon: 'line_style',
      sidebar: true
    }
  }]
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
      icon: 'view_agenda',
      sidebar: true
    }
  }, {
    path: 'tabs',
    component: TabsComponent,
    data: {
      label: 'Tabs',
      icon: 'content_paste',
      sidebar: true
    }
  }, {
    path: 'dialog',
    component: DialogComponent,
    data: {
      label: 'Dialog',
      icon: 'pages',
      sidebar: true
    }
  }, {
    path: 'notifications',
    component: NotificationsComponent,
    data: {
      label: 'notifications',
      icon: 'notifications',
      sidebar: true
    }
  }]
}
];
