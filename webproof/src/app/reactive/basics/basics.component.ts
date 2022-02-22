import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('Nintendo Switch'),
  //   'precio': new FormControl(9808),
  //   'stock': new FormControl(10)
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required, Validators.minLength(4)] ],
    precio: [, [Validators.required, Validators.min(0)] ],
    stock: [, [Validators.required, Validators.min(0)] ]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.miFormulario.reset({ //Si pongo reset, no le importa que tenga todos los campos. 
      nombre: 'Martillo',
      precio: 100,
      stock: 1
    });

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
    this.miFormulario.reset();
  }

}
