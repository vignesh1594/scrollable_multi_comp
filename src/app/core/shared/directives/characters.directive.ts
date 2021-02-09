import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[characters]'
})
export class CharactersDirective {

  constructor(public _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initalValue.replace("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$", '');
    if (initalValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
