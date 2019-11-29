import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppComponent} from './app.component';
import {LibraryComponent} from './library/library.component';
import {CredentialsComponent} from './credentials/credentials.component';
import {ProfileDialogComponent} from './profile-dialog/profile-dialog.component';
import {TabCredentialsComponent} from './credentials/tab-credentials/tab-credentials.component';
import {TabDomainVerfComponent} from './credentials/tab-domain-verf/tab-domain-verf.component';
import {TabOauthConsentComponent} from './credentials/tab-oauth-consent/tab-oauth-consent.component';
import {EditOauthClientComponent} from './credentials/edit-oauth-client/edit-oauth-client.component';
import {EditApikeyComponent} from './edit-apikey/edit-apikey.component';
import {CommonModule} from '@angular/common';
import {LibraryDetailComponent} from './library/library-detail/library-detail.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    outlet: 'navcontent'
  },
  {
    path: 'library',
    component: LibraryComponent,
    outlet: 'navcontent',
  },
  {
    path: 'library/lib-detail',
    component: LibraryDetailComponent,
    outlet: 'navcontent'
  },
  {
    path: 'credentials',
    component: CredentialsComponent,
    outlet: 'navcontent',
    children: [
      {
        path: '',
        redirectTo: 'cre-tab-credentials',
        pathMatch: 'full'
        // outlet: 'cre_sub'
      },
      {
        path: 'credentials',
        redirectTo: 'cre-tab-credentials',
        pathMatch: 'full'
        // outlet: 'cre_sub'
      },
      {
        path: 'cre-tab-credentials',
        component: TabCredentialsComponent,
        outlet: 'cre_sub',

      },
      {
        path: 'cre-tab-oauth-consent-screen',
        component: TabOauthConsentComponent,
        outlet: 'cre_sub'
      },
      {
        path: 'cre-tab-domain-verification',
        component: TabDomainVerfComponent,
        outlet: 'cre_sub'
      },
      {
        path: 'cre-tab-credentials/edit-oauth-client/:clientID',
        component: EditOauthClientComponent,
        outlet: 'cre_sub'
      },
      {
        path: 'cre-tab-credentials/edit-apikey',
        component: EditApikeyComponent,
        outlet: 'cre_sub'
      },
    ]
  },
  {path: 'profile-dialog', component: ProfileDialogComponent, outlet: 'navcontent'},
];

// const childroutes: Routes = [
//   {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
//   {path: 'dashboard', component: DashboardComponent, outlet: 'navcontent'},
//   {path: 'library', component: LibraryComponent, outlet: 'navcontent'},
//   {
//     path: 'credentials',
//     component: CredentialsComponent,
//     outlet: 'navcontent',
//     children: [
//       {
//         path: '',
//         redirectTo: 'cre-tab-credentials',
//         pathMatch: 'full',
//       },
//       {
//         path: 'cre-tab-credentials',
//         component: TabCredentialsComponent,
//         outlet: 'cre_sub'
//       },
//       {
//         path: 'cre-tab-oauth-consent-screen',
//         component: TabOauthConsentComponent,
//         outlet: 'cre_sub'
//       },
//       {
//         path: 'cre-tab-domain-verification',
//         component: TabDomainVerfComponent,
//         outlet: 'cre_sub'
//       },
//     ]
//   },
//   {path: 'profile-dialog', component: ProfileDialogComponent, outlet: 'navcontent'},
// ];

// const childRoutes: Routes = [
//   {
//     path: 'cre-tab-credentials',
//     component: TabCredentialsComponent,
//     outlet: 'cre_sub'
//   },
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forChild(childRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
