import {TestBed} from '@angular/core/testing';

import {OauthClientService} from './oauth-client.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('OauthClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: OauthClientService = TestBed.get(OauthClientService);
    expect(service).toBeTruthy();
    const clients = service.getClients();
    expect(clients.length === 4);
  });
});
