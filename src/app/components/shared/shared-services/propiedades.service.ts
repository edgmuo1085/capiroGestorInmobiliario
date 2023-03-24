import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InmuebleModel, InmuebleRegistroModel } from '../../interfaces/inmueble.interface';
import { ResponseInmueble } from '../../interfaces/response-inmueble.interface';
import { PropiedadesInmuebles } from '../../interfaces/response-propiedades.interface';
import { ResponseArchivo } from '../../interfaces/respose-archivo.interface';

@Injectable({
  providedIn: 'root',
})
export class PropiedadesService {
  constructor(private http: HttpClient) {}

  getInmuebles(): Observable<ResponseInmueble[]> {
    const url = `${environment.URL_API}predio/lista`;
    return this.http.get<ResponseInmueble[]>(url);
  }

  getInmuebleOne(id: number): Observable<ResponseInmueble> {
    const url = `${environment.URL_API}predio/buscar/${id}`;
    //return this.http.get<ResponseArchivo[]>('./assets/data/imagenes.json');
    return this.http.get<ResponseInmueble>(url);
  }

  getPropiedadesDestacados(): Observable<ResponseInmueble[]> {
    const url = `${environment.URL_API}predio/ultimos`;
    //return this.http.get<ResponseInmueble[]>('./assets/data/destacados.json');
    return this.http.get<ResponseInmueble[]>(url);
  }

  getArchivosUrlImg(nombre: string): string {
    return `${environment.URL_API}archivos/getImg/${nombre}`;
  }

  crearInmueble(inmueble: InmuebleRegistroModel): Observable<any> {
    const url = `${environment.URL_API}predio/crear`;
    return this.http.post<any>(url, inmueble);
  }

  guardarFoto(data: any) {
    const url = `${environment.URL_API}archivos/insertar/`;
    return this.http.post<any>(url, data);
  }

  getPropiedades() {
    const url = `${environment.URL_API}predio/lista`;
    return this.http.get(url);
  }

  getPropiedadesFiltro(filtro: any) {
    const url = `${environment.URL_API}predio/filtros/${filtro}`;
    return this.http.get(url);
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
