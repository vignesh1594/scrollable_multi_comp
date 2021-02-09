import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SharedService } from './core/shared/services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hungama crm';
  subscription: Subscription;
  browserRefresh = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) {
  

    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.browserRefresh = router.navigated;
      }
      if (event instanceof NavigationEnd) {
        if (event.url != '/home') {
          this.browserRefresh = true;
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
