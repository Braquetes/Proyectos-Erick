import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  user = {
    genero: '',
    luces: false
  };

  notificaciones = false;
  terminos = false;

  constructor() { }

  ngOnInit(): void {
  }

}
