import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk';

import { TiobeService } from '../../../services/table/tiobe.service';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent implements OnInit {

  constructor(
    public _tiobe: TiobeService
  ) { }

  ngOnInit() {
    this.getTiobe();
  }

  getTiobe() {
    this._tiobe.getTiobe()
      .subscribe(x => console.log(x));
  }

  tableDatabase() {

  }

}
