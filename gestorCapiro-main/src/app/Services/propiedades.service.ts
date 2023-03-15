import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { URL_API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {

  constructor(private http: HttpClient) { }


  crearInmueble(data:any){
    return this.http.post<any>(`${URL_API}predio/crear/`,data).pipe(
      tap((resp: any) => {
        console.log('crear inmueble',resp);
      }),
    )
  }

  guardarFoto(data:any){
    return this.http.post<any>(`${URL_API}fotos/insertar`,data).pipe(
      tap((resp: any) => {
        console.log('foto',resp);
      }),
    )
  }


  getPropiedades(){
    return this.http.get(`${URL_API}predio/lista`);
  }

  getPropiedadesFiltro(filtro:any){
    return  this.http.get(`${URL_API}predio/filtros/${filtro}`);
  }


  // ********************************************************++

  todasPropiedades(){
    return this.http.get('./assets/images/propiedades.json');
  }

  arriendoPropiedades(){
    return this.http.get('./assets/images/propiedades-arriendo.json');
  }

  ventaPropiedades(){
    return this.http.get('./assets/images/propiedades-ventas.json');
  }

  getImgenes(){
    return this.http.get('./assets/images/imagenes.json')
  }

}
