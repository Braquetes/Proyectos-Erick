import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Alumno {
  nombre: '',
  apellido: '',
  edad: '',
  carrera: ''
}

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styles: [
  ]
})
export class ExamenComponent implements OnInit {

  @ViewChild('myform') myform?:NgForm;

  alumno: Alumno = {
    nombre: '',
    apellido: '',
    edad: '',
    carrera: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  validarNombre(): any {
    return this.myform?.controls.nombre?.errors && 
    this.myform?.controls.nombre?.touched;
  }

  validarCarrera(): any {
    return this.myform?.controls.carrera?.errors && 
    this.myform?.controls.carrera?.touched;
  }


  validarEdad(): any {
    return this.myform?.controls.edad?.errors && 
    this.myform?.controls.edad?.value < 18 &&  this.myform?.controls.edad?.touched;
  }

  guardar(){
    if (this.myform?.valid) {
      console.log("Datos correctamente ingresados", this.myform);
    }else{
      console.log("Datos incorrectos");
      this.myform?.resetForm();
    }
  }

}
