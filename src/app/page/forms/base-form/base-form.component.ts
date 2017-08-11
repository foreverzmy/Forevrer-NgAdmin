import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.scss']
})
export class BaseFormComponent implements OnInit {
  public username: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
  }

}
