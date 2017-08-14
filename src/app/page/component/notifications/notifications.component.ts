import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(
    private _notificationsService: NotificationsService,
  ) { }

  ngOnInit() {
  }

  showSuccess() {
    this._notificationsService.success('Title', 'content');
  }

  showError() {
    this._notificationsService.error('Title', 'content');
  }

  showWarn() {
    this._notificationsService.warn('Title', 'content');
  }

  showInfo() {
    this._notificationsService.info('Title', 'content');
  }

  showAlert() {
    this._notificationsService.alert('Title', 'content');
  }

}


