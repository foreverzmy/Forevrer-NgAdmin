import { Component } from '@angular/core';
import { Options } from 'angular2-notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public options: Options;
  constructor() {
    this.options = {
      position: ['bottom', 'right'],
      animate: 'scale',
      timeOut: 3000,
      pauseOnHover: true,
      showProgressBar: false,
      clickToClose: false,
    };
  }
}
