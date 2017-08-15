import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public selectedOption: string;

  constructor(public _dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this._dialog.open(OpenDialogComponent);
  }

  openSelectDialog() {
    const dialogRef = this._dialog.open(SelectDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}

@Component({
  selector: 'app-dialog',
  template: `<div>I am a dialog!</div>`,
})
export class OpenDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-select-dialog',
  template: `
  <h1 md-dialog-title>Select Dialog</h1>
  <div md-dialog-content>Are you sure?</div>
  <div md-dialog-actions>
    <button md-button md-dialog-close=true>Yes</button>
    <button md-button md-dialog-close=false>No</button>
  </div>
  `
})
export class SelectDialogComponent {
  constructor(public dialogRef: MdDialogRef<SelectDialogComponent>) { }
}
