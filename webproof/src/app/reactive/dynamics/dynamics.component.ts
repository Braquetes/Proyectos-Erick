import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(4)]],
    habilidades: this.fb.array([['Proof', Validators.required]], Validators.required)
  });

  newhab: FormControl = this.fb.control('', Validators.required);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  addAlias() {
    let products = this.miFormulario.get('habilidades') as FormArray;
    products.push(new FormControl(this.newhab.value,Validators.required));
    this.newhab = this.fb.control('', Validators.required); 
  }

  get getControl() {
    return this.miFormulario.get('habilidades') as FormArray;
  }

  campoValido(campo:string){
    return this.miFormulario.controls[campo].errors
    && this.miFormulario.controls[campo].touched;
  }

  save(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(4)]],
      habilidades: this.fb.array([['Proof', Validators.required]], Validators.required)
    });
  }

  eliminarHabilidad(i: number):void{
    console.log(i);
    this.getControl.removeAt(i);
  }

}
