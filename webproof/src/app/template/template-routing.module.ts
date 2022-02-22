import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './basics/basics.component';
import { DynamicsComponent } from './dynamics/dynamics.component';
import { ExamenComponent } from './examen/examen.component';
import { SwitchesComponent } from './switches/switches.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'basics', component: BasicsComponent},
      {path: 'dynamics', component: DynamicsComponent},
      {path: 'switches', component: SwitchesComponent},
      {path: 'examen', component:ExamenComponent},
      {path: '**', redirectTo:'basics'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
