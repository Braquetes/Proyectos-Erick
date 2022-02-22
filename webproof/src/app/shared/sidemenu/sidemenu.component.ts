import { Component, OnInit } from '@angular/core';

interface itemMenu {
  title: string,
  url: string
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
  ]
})
export class SidemenuComponent implements OnInit {

  menuT:itemMenu[] = [{
    title: 'Basics',
    url: '/template/basics'
  },
  {
    title: 'Dynamics',
    url: '/template/dynamics'
  },
  {
    title: 'Switches',
    url: '/template/switches'
  },
  {
    title: 'Examen',
    url: '/template/examen'
  }
]

menuR:itemMenu[] = [{
  title: 'Basics',
  url: '/reactive/basics'
},
{
  title: 'Dynamics',
  url: '/reactive/dynamics'
},
{
  title: 'Switches',
  url: '/reactive/switches'
}
]
 
constructor() { }

  ngOnInit(): void {
  }

}
