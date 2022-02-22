import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myform') myform?:NgForm;

  dataInicial = {
    producto: 'Cuaderno',
    precio: 23,
    stock: 20
  };

  constructor() { }

  ngOnInit(): void {
  }

  validarNombre(): any {
    return this.myform?.controls.producto?.errors && 
    this.myform?.controls.producto?.touched;
  }

  precioValido():any{
    return this.myform?.controls.precio?.touched
    && this.myform?.controls.precio?.value < 0;
  }
 
  guardar(){
    if (this.myform?.controls.precio?.value < 0) {
      console.log("No se enviaron los datos");
    }else{
      console.log("Se enviaron los datos", this.myform);
      this.myform?.resetForm();
      //Cuadritos morados son funciones y los azules son propiedades.
    }
  }

}
