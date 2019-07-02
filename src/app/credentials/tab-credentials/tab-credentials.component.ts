import {Component, OnInit} from '@angular/core';
import {ApiKey} from '../../models/apikey';
import {Client, ClientType} from '../../models/client';
import {OauthClientService} from '../../oauth-client.service';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {ApikeyService} from '../../apikey.service';

export interface ClientModel extends Client {
  typeLabel: string;
}

@Component({
  selector: 'app-tab-credentials',
  templateUrl: './tab-credentials.component.html',
  styleUrls: ['./tab-credentials.component.css']
})
export class TabCredentialsComponent implements OnInit {

  displayedColumnsApikey: string[] = ['select', 'name', 'creationDate', 'restrictions', 'key', 'operations'];
  dataSourceApikey: MatTableDataSource<ApiKey>;
  selectionApikey = new SelectionModel<ApiKey>(true, []);

  displayedColumnsClient: string[] = ['select', 'name', 'creationDate', 'type', 'clientID', 'operations'];
  dataSourceClient: MatTableDataSource<ClientModel>;
  selectionClient = new SelectionModel<ClientModel>(true, []);


  constructor(
    private oauthClientService: OauthClientService,
    private apikeyService: ApikeyService
  ) {
    this.refreshClients();
    this.refreshApikeys();
  }

  ngOnInit() {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllClientSelected() {
    const numSelected = this.selectionClient.selected.length;
    const numRows = this.dataSourceClient.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleClient() {
    this.isAllClientSelected() ?
      this.selectionClient.clear() :
      this.dataSourceClient.data.forEach(row => this.selectionClient.select(row));
  }

  selectClient(row: ClientModel) {
    if (this.selectionClient.selected && this.selectionClient.selected.length > 1) {
      this.selectionClient.clear();
      this.selectionClient.select(row);
      return;
    }
    this.selectionClient.toggle(row);
    this.selectionClient.selected.forEach((cli) => {
      if (row !== cli) {
        this.selectionClient.deselect(cli);
      }
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllApikeysSelected() {
    const numSelected = this.selectionApikey.selected.length;
    const numRows = this.dataSourceApikey.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggleApikey() {
    this.isAllApikeysSelected() ?
      this.selectionApikey.clear() :
      this.dataSourceApikey.data.forEach(row => this.selectionApikey.select(row));
  }

  selectApikey(row: ApiKey) {
    if (this.selectionApikey.selected && this.selectionApikey.selected.length > 1) {
      this.selectionApikey.clear();
      this.selectionApikey.select(row);
      return;
    }
    this.selectionApikey.toggle(row);
    this.selectionApikey.selected.forEach((cli) => {
      if (row !== cli) {
        this.selectionApikey.deselect(cli);
      }
    });
  }


  refreshClients() {
    const clients: Client[] = this.oauthClientService.getClients();
    const clientModels: ClientModel[] = [];

    if (clients && clients.length > 0) {
      clients.forEach(c => {
        const model: ClientModel = {
          clientID: c.clientID,
          type: c.type,
          creationDate: c.creationDate,
          name: c.name,
          typeLabel: ClientType[c.type],
          secret: ''
        };
        clientModels.push(model);
      });
      this.dataSourceClient = new MatTableDataSource<ClientModel>(clientModels);
    }
  }

  refreshApikeys() {
    const apiKeys: ApiKey[] = this.apikeyService.getApiKeys();
    console.info(apiKeys);
    this.dataSourceApikey = new MatTableDataSource<ApiKey>(apiKeys);
  }

  isAllDeselected() {
    if (this.selectionApikey.selected && this.selectionApikey.selected.length > 0) {
      return true;
    }
    if (this.selectionClient.selected && this.selectionClient.selected.length > 0) {
      return true;
    }
    return false;
  }

}
