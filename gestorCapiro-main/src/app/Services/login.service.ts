import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { URL_API } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  estadoUsuario!: string;
  estado = new Subject<any>();
  nombreUsuario = new Subject<any>();
  idUsuario = new Subject<any>();

  constructor(private http: HttpClient) {}

  getMessage(): Observable<any> {
    return this.estado.asObservable();
  }

  login(correo: string, contra: string): Observable<any> {
    let json = { usuario: correo, password: contra };
    return this.http.post<any>(`${URL_API}login/loguear/`, json).pipe(
      tap((resp: any) => {
        if (resp !== null) {
          if (resp.token === null) {
            localStorage.removeItem('token');
          } else {
            localStorage.setItem('dataUser', JSON.stringify(resp));
            localStorage.setItem('token', resp.token);
            this.estado.subscribe(resp);
            this.estado.next(resp.estado);
            this.nombreUsuario.subscribe(resp);
            this.nombreUsuario.next(resp.nombres);
            this.idUsuario.subscribe(resp);
            this.idUsuario.next(resp.id);
          }
        }
      })
    );
  }

  registrarUsuario(data: any) {
    return this.http.post<any>(`${URL_API}user/crear/`, data).pipe(
      tap((resp: any) => {
        if (resp !== null) {
          if (resp.token === null) {
            localStorage.removeItem('token');
          } else {
            localStorage.setItem('token', resp.token);
          }
        }
      })
    );
  }
}
