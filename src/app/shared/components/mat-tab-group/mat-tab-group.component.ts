import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mat-tab-group',
  templateUrl: './mat-tab-group.component.html',
  styleUrls: ['./mat-tab-group.component.css']
})
export class MatTabGroupComponent implements OnInit {
  tabs:any = [];
  storyList:any = [];
  applist:any = [];

  @Input() tabsList: any;

  selectedOrderTab = 0;

  constructor() {
    this.selectedOrderTab = 0;
  }

  ngOnInit() {
    this.tabs = this.tabsList;
    this.storyList = this.tabsList[0].stroyDetails;
    for (const [key, value] of Object.entries(this.tabsList[0])) {
      if (key !== "header" && key !== "userDetails" && key !== "stroyDetails") {
        this.applist.push(value);
      }
    }
  }

  tabChange(event) {
    this.storyList = [];
    this.applist = [];
    this.selectedOrderTab = event;
    this.storyList = this.tabsList[event].stroyDetails;
    for (const [key, value] of Object.entries(this.tabsList[event])) {
      if (key !== "header" && key !== "userDetails" && key !== "stroyDetails") {
        this.applist.push(value);
      }
    }

  }

  ngAfterViewInit(): void {
    document.getElementsByClassName('mat-tab-header-pagination-before')[0].remove();
    document.getElementsByClassName('mat-tab-header-pagination-after')[0].remove();
  }

}
