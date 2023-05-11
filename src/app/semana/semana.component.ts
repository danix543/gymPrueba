import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WgerService } from '../wger.service';

@Component({
  selector: 'app-semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.scss']
})
export class SemanaComponent implements OnInit {
  diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  error: string = '';
  id : number = 330782;
  ejercicios: any[] | undefined;

  constructor(private wgerService: WgerService) {}

  ngOnInit() {
    this.wgerService.getEjerciciosRutina(330782).subscribe(
      data => {
        this.ejercicios = data.results;
      },
      error => {
        console.log(error);
      }
    );
  }
}
