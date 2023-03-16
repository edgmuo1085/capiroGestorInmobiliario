import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDataShared } from '../../interfaces/response-login.interface';
import { StorageLocalService } from './storage-local.service';

@Injectable({
  providedIn: 'root',
})
export class DataUserService {
  userData: BehaviorSubject<UserDataShared>;
  userDataValue$: Observable<UserDataShared>;
  tokenLocal: BehaviorSubject<string>;
  tokenLocalValue$: Observable<string>;
  userInfo: UserDataShared = {
    idUsuario: 0,
    nombres: '',
    apellidos: '',
    correo: '',
    identificacion: '',
    tipoIdentificacion: '',
    estado: '',
    tipoCuenta: '',
    token: '',
  };

  constructor(private JwtHelper: JwtHelperService, private router: Router, private storageService: StorageLocalService) {
    this.userData = new BehaviorSubject<UserDataShared>(this.userInfo);
    this.userDataValue$ = this.userData.asObservable();
    this.tokenLocal = new BehaviorSubject('');
    this.tokenLocalValue$ = this.tokenLocal.asObservable();
    this.setUserDataStorage();
    this.setTokenLocalStorage();
  }

  setUserData(userData: UserDataShared): void {
    this.userData.next(userData);
  }

  getUserData(): Observable<UserDataShared> {
    return this.userDataValue$;
  }

  setTokenLocal(tokenLocal: string): void {
    this.tokenLocal.next(tokenLocal);
  }

  getTokenLocal(): Observable<string> {
    return this.tokenLocalValue$;
  }

  setUserDataStorage(): void {
    const gestorCapiroData = this.storageService.localGet(environment.storageKey.usuarioCapiro);
    let user: UserDataShared = this.userInfo;
    if (gestorCapiroData) {
      user = JSON.parse(window.atob(gestorCapiroData));
    }
    this.setUserData(gestorCapiroData ? user : this.userInfo);
  }

  setTokenLocalStorage(): void {
    const gestorCapiroToken = this.storageService.localGet(environment.storageKey.tokenCapiro);
    this.setTokenLocal(gestorCapiroToken);
  }

  enableToken(): boolean {
    let tokenString = this.storageService.localGet(environment.storageKey.tokenCapiro);
    if (tokenString) {
      let isTokenExpired = this.JwtHelper.isTokenExpired(tokenString);
      return isTokenExpired ? false : true;
    }

    return false;
  }

  getDataUser(): UserDataShared {
    let user: UserDataShared = {} as UserDataShared;
    this.getUserData().subscribe(response => {
      user = response;
    });
    return user;
  }

  signOut() {
    localStorage.clear();
    this.setTokenLocal('');
    this.setUserData(this.userInfo);
    this.router.navigate(['/page/home']);
  }
}
