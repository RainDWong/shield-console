import { Component, OnInit } from '@angular/core';

export interface ApiKey {
  name: string;
  creationDate: string;
  restrictions: string[];
  key: string;
}

export interface Client {
  name: string;
  creationDate: string;
  type: ClientType;
  clientId: string;
}

export enum ClientType {
  WebApplication, Android, IOS, Other
}

@Component({
  selector: 'app-tab-credentials',
  templateUrl: './tab-credentials.component.html',
  styleUrls: ['./tab-credentials.component.css']
})
export class TabCredentialsComponent implements OnInit {

  apikeys: ApiKey[] = [
    {name: 'My API key 1', creationDate: '2019-07-01', restrictions: [], key: 'asdfasdfasdfadfaf'},
    {name: 'My API key 2', creationDate: '2019-07-01', restrictions: [], key: 'fdafdsafwer1sdfsd'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
