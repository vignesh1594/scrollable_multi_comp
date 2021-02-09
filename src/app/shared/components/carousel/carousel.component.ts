import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() slidesList: any;
  slides = [];
  slideConfig ={};
  type ="";
  header ="";
  arrow:boolean = false;
  constructor() {  
   
  } 

  ngOnInit(): void {
    this.type = this.slidesList.type;
    this.header = this.slidesList.header;
    this.arrow = this.slidesList.arrow;
    this.slides = this.slidesList.data;
    this.slideConfig = this.slidesList.config;
  }


}
