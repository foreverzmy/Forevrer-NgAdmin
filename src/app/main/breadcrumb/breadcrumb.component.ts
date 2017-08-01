import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Params, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from '@angular/router';
import 'rxjs/add/operator/filter';

interface IBreadcrumb {
  label: string;
  params?: Params;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() menus;
  public breadcrumbs: IBreadcrumb[];
  constructor(
    private _activetedRoute: ActivatedRoute,
    private _route: Router
  ) { }

  ngOnInit() {
    this.breadcrumbs = this.getBreadcrumbs(this._activetedRoute.root);
    this._route.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(e => {
        const root = this._activetedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);
      });
  }

  getBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: IBreadcrumb[] = []): IBreadcrumb[] {
    const children: ActivatedRoute[] = route.children;
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      if (child.outlet !== PRIMARY_OUTLET) {
        continue;
      }
      if (!child.snapshot.data.hasOwnProperty('label')) {
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }
      let routeURL: string;
      if (child.snapshot.url.length === 0) {
        routeURL = 'main';
      } else {
        routeURL = child.snapshot.url.map(segment => segment.path).join('/');
      }

      url += `/${routeURL}`;
      const breadcrumb: IBreadcrumb = {
        label: child.snapshot.data['label'],
        params: child.snapshot.params,
        url: url
      };
      breadcrumbs.push(breadcrumb);
      return this.getBreadcrumbs(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }

}
