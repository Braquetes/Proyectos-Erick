import { Component, OnInit } from '@angular/core';

interface Campeon {
  nombre: string;
  habilidades: Habilidad[];
}

interface Habilidad {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  constructor() { }
  newHab : string = '';

  champion: Campeon = {
    nombre: "Vex",
    habilidades: [
      // { id:1, nombre:'Sombra' }, 
      // { id:2, nombre:'Magia'},
    ]
  }

  ngOnInit(): void {
  }

  save(){}

  eliminar(index: number){
    this.champion.habilidades.splice(index,1)
  }

  addHab(){
    const newHab: Habilidad = {
      id: this.champion.habilidades.length + 1,
      nombre: this.newHab
    }
    this.champion.habilidades.push({...newHab});
    this.newHab = '';
  }

}
