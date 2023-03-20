import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PropiedadesInmuebles } from '../../interfaces/response-propiedades.interface';

@Injectable({
  providedIn: 'root',
})
export class PropiedadesService {
  constructor(private http: HttpClient) {}

  getPropiedadesDestacados(): Observable<PropiedadesInmuebles[]> {
    return this.http.get<PropiedadesInmuebles[]>('./assets/data/destacados.json');
    //return this.http.get<any>(`${environment.URL_API}predio/ultimos`);
  }

  crearInmueble(data: any) {
    return this.http.post<any>(`${environment.URL_API}predio/crear/`, data).pipe(
      tap((resp: any) => {
        console.log('crear inmueble', resp);
      })
    );
  }

  guardarFoto(data: any) {
    return this.http.post<any>(`${environment.URL_API}fotos/insertar`, data).pipe(
      tap((resp: any) => {
        console.log('foto', resp);
      })
    );
  }

  getPropiedades() {
    return this.http.get(`${environment.URL_API}predio/lista`);
  }

  getPropiedadesFiltro(filtro: any) {
    return this.http.get(`${environment.URL_API}predio/filtros/${filtro}`);
  }

  // ********************************************************++

  todasPropiedades() {
    return this.http.get('./assets/data/propiedades.json');
  }

  arriendoPropiedades() {
    return this.http.get('./assets/data/propiedades-arriendo.json');
  }

  ventaPropiedades() {
    return this.http.get('./assets/data/propiedades-ventas.json');
  }

  getImgenes() {
    return this.http.get('./assets/data/imagenes.json');
  }
}
