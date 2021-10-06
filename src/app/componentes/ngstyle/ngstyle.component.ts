import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  template: `
    <div [ngStyle]="tamano">
      Hola Mundo... esto es una etiqueda
    </div>
    <div [style.font-size.px]="fonttamano">
      Hola Mundo... esto es una etiqueda
    </div>
    <button class="btn btn-primary mx-2" (click)="sumar()">+10</button>
    <button class="btn btn-primary" (click)="restar()">-10</button>
  `,
  styles: []
})
export class NgstyleComponent implements OnInit {

  constructor() { }

  imagen: string = "https://images.pexels.com/photos/80474/grass-snake-snake-serpentes-natrix-80474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

  tamano= {
    "font-size": "20px",
  }
  fonttamano= 40;

  sumar(){
    this.fonttamano = this.fonttamano +10
  }
  restar(){
    this.fonttamano = this.fonttamano -10
  }

  ngOnInit() {
  }

}
