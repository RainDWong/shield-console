import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiKey} from './models/apikey';

@Injectable({
  providedIn: 'root'
})
export class ApikeyService {

  apikeys: ApiKey[] = [
    {
      name: 'api key 1',
      creationDate: '2019-07-01',
      restrictions: null,
      key: 'daea9146-ca13-4b6d-9ff3-985496973c37'
    },
    {
      name: 'api key 2',
      creationDate: '2019-06-25',
      restrictions: null,
      key: '65eac023-811b-44eb-b9f5-176b55398090'
    }
  ];


  constructor(
    private http: HttpClient
  ) { }


  getApiKeys() {
    // return this.http.get('/assets/fakedata/apikeys.json');
    return this.apikeys;
  }
}
