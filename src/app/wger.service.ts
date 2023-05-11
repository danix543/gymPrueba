import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ejercicio } from './ejercicio';

@Injectable({
  providedIn: 'root'
})
export class WgerService {

  constructor(private http: HttpClient) {}

  apiKey = '07d7138492a2995c674e22113c9bd419b11e8a9b';
  apiUrl = 'https://wger.de/api/v2/';

  getExercises(): Observable<any>{
    const apiKey = this.apiKey;
    const apiUrl = this.apiUrl + 'exercise/?language=4';
    const LIMITAR5 = '&limit=5';

    return this.http.get(apiUrl+LIMITAR5, {
      headers: {
        'Authorization': `Token ${apiKey}`
      }
    });
  }

  getImagesEjercicios(id: number): Observable<any>{
    const url = `${this.apiUrl}/exerciseimage/?exercise=${id}`;
    const apiKey = this.apiKey;
    return this.http.get(url, {
      headers: {
        'Authorization': `Token ${apiKey}`
      }
    });
  }

  getEjerciciosRutina(id: number) : Observable<any>{
    const url = `${this.apiUrl}/exercise/?workout=${id}`;
    const apiKey = this.apiKey;
    return this.http.get(url, {
      headers: {
        'Authorization': `Token ${apiKey}`
      }
    });
  }
}
