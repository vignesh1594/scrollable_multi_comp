import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../modules/angular-material/angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AngularImageViewerModule } from 'angular-x-image-viewer';
import { SlickCarouselModule } from 'ngx-slick-carousel';

//module


//directives
import { NumberDirective } from '../core/shared/directives/numbers-only.directive';
import { DecimalNumberDirective } from '../core/shared/directives/decimal-numbers.directive';
import { AlphabetsDirective } from '../core/shared/directives/alphabets.directive';
import { CharactersDirective } from '../core/shared/directives/characters.directive';

//pipes

//components
import { HeaderComponent } from './components/header/header.component';
import { ToastrComponent } from "./components/toastr/toastr.component";
import { HttpClient } from '@angular/common/http';
import { MatTabGroupComponent } from './components/mat-tab-group/mat-tab-group.component';
import { CarouselComponent } from './components/carousel/carousel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ToastrComponent,
    NumberDirective,
    DecimalNumberDirective,
    AlphabetsDirective,
    CharactersDirective,
    MatTabGroupComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularImageViewerModule,
    SlickCarouselModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    AngularImageViewerModule,
    SlickCarouselModule,
    // components
    HeaderComponent,
    ToastrComponent,
    MatTabGroupComponent,
    CarouselComponent,
    // directives
    NumberDirective,
    DecimalNumberDirective,
    AlphabetsDirective,
    CharactersDirective,
  ],
  entryComponents: [

  ]
})


export class SharedModule { }
