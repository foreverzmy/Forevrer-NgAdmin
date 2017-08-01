import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MainRoutes } from '../main.routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menus;
  public ismMinify = true;
  public open: string;
  public activeBars: string[];
  constructor(private _route: Router) {
  }

  ngOnInit() {
    this.getActiveRoute();
    this._route.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe(e => {
        this.getActiveRoute();
      });
  }
  // 放大缩小侧边栏
  adjust() {
    this.ismMinify = !this.ismMinify;
    this.open = '';
  }
  // 二级菜单伸缩
  toogle(path: string) {
    if (this.ismMinify === false) {
      this.open = this.open === path ? '' : path;
    }
  }
  // 显示菜单
  showMenu(path: string) {
    if (this.ismMinify === true) {
      this.open = path;
    }
  }
  // 隐藏菜单
  hideMenu(path: string) {
    if (this.ismMinify === true) {
      this.open = '';
    }
  }
  // 获取活动路由
  getActiveRoute() {
    this.activeBars = this._route.url.split('/').slice(2);
  }

}
