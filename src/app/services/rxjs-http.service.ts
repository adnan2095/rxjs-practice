import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class RxjsHttpService {

  constructor() { }

  get(path: string) {
    return ajax({
      url: 'api/' + path,
      method: 'GET',
      headers: {},
      body: {}
    });
  }
}
