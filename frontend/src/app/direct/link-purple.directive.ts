import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLinkPurple]'
})
export class LinkPurpleDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#8555e9'
  }

}
