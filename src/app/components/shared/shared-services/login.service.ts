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
  }

  registrarUsuario(data: string): Observable<any> {
    return this.http.post<any>(`${environment.URL_API}user/crear/`, data);
  }
}
