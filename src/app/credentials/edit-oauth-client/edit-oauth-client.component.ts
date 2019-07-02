import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {OauthClientService} from '../../oauth-client.service';
import {Client} from '../../models/client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-oauth-client',
  templateUrl: './edit-oauth-client.component.html',
  styleUrls: ['./edit-oauth-client.component.css']
})
export class EditOauthClientComponent implements OnInit {

  client: Client;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private oauthClientService: OauthClientService
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.client = this.oauthClientService.getClient(params.get('clientID'));
    });
  }

  goBack() {
    this.location.back();
  }

  getClient(clientID: string) {
    return this.oauthClientService.getClient(clientID);
  }
}
