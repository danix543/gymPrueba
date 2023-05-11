import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WgerService } from '../wger.service';
import { Observable, take, forkJoin} from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.scss']
})
export class EjerciciosComponent implements OnInit {

  ejercicios: any[] = [];
  imagenesEjercicios: {[ejercicioId: number]: any[]} = {};

  constructor(private wgerservice: WgerService) { }

  ngOnInit(): void {
    this.getEjercicios();
  }

  getEjercicios(): void {
    this.wgerservice.getExercises().subscribe((response: any) => {
      this.ejercicios = response.results;
      this.ejercicios.forEach(ejercicio => {
        this.getImagesEjercicios(ejercicio.id);
      });
    });
  }

  getImagesEjercicios(id: number): void {
    this.wgerservice.getImagesEjercicios(id).subscribe((response: any) => {
      this.imagenesEjercicios[id] = response.results;
    });
  }

}

