import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TiobeService {

  constructor(
    private _http: HttpClient
  ) { }

  getTiobe() {
    return this._http.get('assets/data/tiobe.json');
  }
}
