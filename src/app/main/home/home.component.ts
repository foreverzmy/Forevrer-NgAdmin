import { Component, OnInit } from '@angular/core';
import { PageRoutes } from '../../page/page.routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private menus;

  constructor() { }

  ngOnInit() {
    this.menus = PageRoutes;
  }

}
