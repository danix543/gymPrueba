import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { InicioComponent } from './inicio/inicio.component';
import { RutinaComponent } from './rutina/rutina.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { SemanaComponent } from './semana/semana.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    InicioComponent,
    RutinaComponent,
    CalendarioComponent,
    EjerciciosComponent,
    SemanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
