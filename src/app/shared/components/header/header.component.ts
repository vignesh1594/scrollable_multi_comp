import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from "@angular/common";
import { MatDialog } from '@angular/material';

import { Observable, Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { SharedService } from '../../../core/shared/services/shared.service';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)',
        visibility: 'visible'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)',
        visibility: 'hidden'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit, OnDestroy {
  user$: Observable<any>;
  menuState = 'out';
  path: string;
  cartCount: number = 0;
  redirectHome: string = '/home';
  fromMobile = false;
  languages = [];
  langValue = 'en';
  subscription: Subscription;
  constructor(
    public dialog: MatDialog,
    private location: Location,
    private router: Router,
    private sharedService: SharedService,
    private route: ActivatedRoute,
    private appService: AppService,

  ) {
    this.router.events.subscribe(val => {
      this.menuState = 'out';
    })
    this.setTopbar(location.path());
  }

  ngOnInit() {
    
  }

  setTopbar(path: string) {
    var pathArray = path.split("/");
    this.path = pathArray[pathArray.length - 1];
  }
  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }



  closeSideNav(event) {
    this.toggleMenu();
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
