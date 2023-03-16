import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseLoginShared } from '../../interfaces/response-login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(data: string): Observable<ResponseLoginShared> {
    return this.http.post<ResponseLoginShared>(`${environment.URL_API}login/loguear/`, data);
    /* return this.http.post<any>(`${URL_API}login/loguear/`, data).pipe(
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
    ); */
  }

  registrarUsuario(data: any) {
    return this.http.post<any>(`${environment.URL_API}user/crear/`, data);
  }
}
