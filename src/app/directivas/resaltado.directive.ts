import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') colorEnviado: string;

  constructor(public element: ElementRef) { 
    console.log("Directiva activada")
  }

  colorResaltado(color: string){
    this.element.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter') mouseEntro(){
    this.colorResaltado(this.colorEnviado || "yellow" );
  }

  @HostListener('mouseleave') mouseSale(){
    this.colorResaltado(null);
  }


}
