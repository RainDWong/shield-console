import {Injectable} from '@angular/core';
import {Client} from './models/client';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OauthClientService {

  // clients: Client[];
  clients = [
    {
      name: 'web application',
      creationDate: '2019-06-25',
      type: 0,
      clientID: '03f2a560-4e48-4134-b765-830d53c9aaa2',
      secret: 'fake_secret',
      authJSOrigins: ['http://localhost/', 'https://www.example.com/'],
      authRedirectURIs: ['http://localhost/', 'https://www.example.com/']
    },
    {
      name: 'android client',
      creationDate: '2019-06-25',
      type: 1,
      clientID: '4ab90892-6b83-4af7-91ba-329ba236c1eb',
      secret: 'fake_secret',
      signCertFingerprint: 'my-fake-signing-certificate-finger-print',
      packageName: 'com.example'
    },
    {
      name: 'ios client',
      creationDate: '2019-07-01',
      type: 2,
      clientID: 'd0c7edf8-239f-427c-82e7-460a20b36189',
      secret: 'fake_secret',
      bundleID: 'my-fake-bundle-id',
      appStoreID: 'my-fake-app-store-id',
      teamID: null
    },
    {
      name: 'oauth client',
      creationDate: '2019-07-01',
      type: 3,
      clientID: '65eac023-811b-44eb-b9f5-176b55398090',
      secret: 'fake_secret',
    }
  ];

  constructor(
    private http: HttpClient,
  ) {
    // this.http.get('/assets/fakedata/oauthclients.json').subscribe(
    //   (data: Client[]) => this.clients = {...data}
    // );
    // console.info('clients: ' + this.clients);
  }

  getClients() {
    // console.info("aaa");
    // return this.http.get('/assets/fakedata/oauthclients.json');
    return this.clients;
  }

  getClient(clientID) {
    let cli = null;
    this.clients.forEach(
      (client) => {
        if (client.clientID === clientID) {
          cli = client;
          return;
        }

      });
    return cli;
  }
}
