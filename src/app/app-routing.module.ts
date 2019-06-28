import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppComponent} from './app.component';
import {LibraryComponent} from './library/library.component';
import {CredentialsComponent} from './credentials/credentials.component';

const routes: Routes = [
  {path: '', component: AppComponent}
];

const childroutes: Routes = [
  {path: 'dashboard', component: DashboardComponent, outlet: 'navcontent'},
  {path: 'library', component: LibraryComponent, outlet: 'navcontent'},
  {path: 'credentials', component: CredentialsComponent, outlet: 'navcontent'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(childroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
