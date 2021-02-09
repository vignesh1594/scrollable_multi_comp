import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject, Subscription, Subject } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private unsubscribe: Subscription[] = [];
  constructor(
    // private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
  ) { }

}
