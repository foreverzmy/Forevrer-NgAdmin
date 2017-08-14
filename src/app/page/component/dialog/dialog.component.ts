import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public _dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this._dialog.open(OpenDialogComponent);
  }
}

@Component({
  selector: 'app-dialog',
  template: `
  <div class="content">
  I am a dialog!
  </div>
  `,
})
export class OpenDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
