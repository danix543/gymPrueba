import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './calendario/calendario.component';
import { InicioComponent } from './inicio/inicio.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { RutinaComponent } from './rutina/rutina.component';
import { SemanaComponent } from './semana/semana.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'ejercicios', component: EjerciciosComponent },
  { path: 'rutina', component: RutinaComponent,
  children: [
    {
      path: '', redirectTo: 'semana', pathMatch: 'full'
    },
    {
      path: 'semana', component: SemanaComponent,
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
