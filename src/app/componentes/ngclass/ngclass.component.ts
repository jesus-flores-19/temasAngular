import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styles: []
})
export class NgclassComponent implements OnInit {

  constructor() { }

  alerta: string = "alert-primary"
  loading: boolean = false;


  changeClass(i: number){
    switch (i) {
      case 1:
        this.alerta = "alert-primary"
      break;
      case 2:
        this.alerta = "alert-secondary"
      break;
      case 3:
        this.alerta = "alert-success"
      break;
      case 4:
        this.alerta = "alert-danger"
      break;
    }
  }

  ejecutar(){
    this.loading = true;
    setTimeout( ()=> this.loading=false, 4000);
  }

  ngOnInit() {
  }

}
