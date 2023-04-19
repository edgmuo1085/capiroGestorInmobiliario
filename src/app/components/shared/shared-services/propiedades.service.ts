import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArchivoInmuebleModel, ArchivoInmuebleUpModel, DocumentoUpModel } from '../../interfaces/archivo-inmueble.interface';
import { InmuebleModel, InmuebleRegistroModel } from '../../interfaces/inmueble.interface';
import { ResponseInmueble } from '../../interfaces/response-inmueble.interface';
import { ResponseArchivo } from '../../interfaces/respose-archivo.interface';
import { AvaluoModel, HipotecaModel, ResponseAvaluoHipoteca } from '../../interfaces/response-avaluo-hipoteca.interface';

@Injectable({
  providedIn: 'root',
})
export class PropiedadesService {
  constructor(private http: HttpClient) {}

  getInmuebles(): Observable<ResponseInmueble[]> {
    const url = `${environment.URL_API}predio/lista`;
    return this.http.get<ResponseInmueble[]>(url);
  }

  getInmueblesUsuario(idUsuario: number): Observable<ResponseInmueble[]> {
    const url = `${environment.URL_API}predio/listausuario/${idUsuario}`;
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

  actualizarInmueble(inmueble: InmuebleModel): Observable<any> {
    const url = `${environment.URL_API}predio/crear`;
    return this.http.post<any>(url, inmueble);
  }

  guardarFoto(data: ArchivoInmuebleModel): Observable<ResponseArchivo> {
    const url = `${environment.URL_API}archivos/insertar/`;
    return this.http.post<ResponseArchivo>(url, data);
  }

  guardarDocumento(data: DocumentoUpModel): Observable<ResponseArchivo> {
    const url = `${environment.URL_API}archivos/insertar/`;
    return this.http.post<ResponseArchivo>(url, data);
  }

  getUploadPhotoHosting2(formData: FormData): Observable<any> {
    const url = `https://arrendamientoscapiro.com/up_imagen/form-capiro.php`;
    return this.http.post(url, formData);
  }

  getUploadPhotoHosting(formData: FormData): Observable<HttpEvent<void>> {
    //const url = `http://localhost/capiro/up_imagen/form-capiro.php`;
    const url = `https://arrendamientoscapiro.com/up_imagen/form-capiro.php`;
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  actualizarArchivoAdjunto(data: ArchivoInmuebleUpModel): Observable<ResponseArchivo> {
    const url = `${environment.URL_API}archivos/insertar/`;
    return this.http.post<ResponseArchivo>(url, data);
  }

  getPropiedadesTodas() {
    const url = `${environment.URL_API}predio/lista`;
    return this.http.get(url);
  }

  getPropiedadesFiltro(filtro: string): Observable<ResponseInmueble[]> {
    const url = `${environment.URL_API}predio/filtros/${filtro}`;
    return this.http.get<ResponseInmueble[]>(url);
  }

  listarAvaluoHipoteca(): Observable<ResponseAvaluoHipoteca[]> {
    const url = `${environment.URL_API}aval/lista`;
    return this.http.get<ResponseAvaluoHipoteca[]>(url);
  }

  crearAvaluo(data: AvaluoModel): Observable<ResponseAvaluoHipoteca> {
    const url = `${environment.URL_API}aval/insertar/`;
    return this.http.post<ResponseAvaluoHipoteca>(url, data);
  }

  crearHipoteca(data: HipotecaModel): Observable<ResponseAvaluoHipoteca> {
    const url = `${environment.URL_API}aval/insertar/`;
    return this.http.post<ResponseAvaluoHipoteca>(url, data);
  }
}
