import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainRoutes } from '../main.routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menus;
  public ismMinify = false;
  public open: string;
  constructor() {
  }

  ngOnInit() {
  }
  // 放大缩小侧边栏
  adjust() {
    this.ismMinify = !this.ismMinify;
  }
  // 二级菜单伸缩
  toogle(path: string) {
    this.open = this.open === path ? '' : path;
  }

}
