import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private ele: ElementRef) { 
    this.ele.nativeElement.style.color='hotpink'
  }

}
