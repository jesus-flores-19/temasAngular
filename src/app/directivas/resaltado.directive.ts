import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public element: ElementRef) { 
    console.log("Directiva activada")
    this.element.nativeElement.style.backgroundColor = "yellow"
  }



}
