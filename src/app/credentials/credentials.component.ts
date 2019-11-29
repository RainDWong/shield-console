import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.router.navigate([{
    //   outlets: {
    //     navcontent: ['credentials'],
    //     cre_sub: ['cre-tab-credentials']
    //   }
    // }]);
    // const currentNavigation = this.router.getCurrentNavigation();
    // console.info(currentNavigation);
    // console.info(this.router.routerState);
    // console.info(this.router.routeReuseStrategy);
    this.router.navigateByUrl('(navcontent:credentials/(cre_sub:cre-tab-credentials))');
  }

}
