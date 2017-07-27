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
  constructor() {
  }

  ngOnInit() {
  }

  adjust() {
    this.ismMinify = !this.ismMinify;
  }

}
