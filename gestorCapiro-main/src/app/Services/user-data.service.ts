import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../core/interface/user-data';


@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userData: BehaviorSubject<UserData>;
  userDataValue$: Observable<UserData>;
  token: BehaviorSubject<String>;
  tokenValue$: Observable<String>;
  userDataInfo: UserData = {
    sucursal: {},
    empresa: {},
    id: '',
    verificacion: '',
    userAlias: '',
    nombre: '',
    esEmpleado: '',
  };

  constructor(private router: Router) {
    this.userData = new BehaviorSubject<UserData>(this.userDataInfo);
    this.userDataValue$ = this.userData.asObservable();
    this.token = new BehaviorSubject<String>('');
    this.tokenValue$ = this.token.asObservable();
    this.setUserDataStorage();
    this.setTokenStorage();
  }

  setUserData(userData: UserData): void {
    this.userData.next(userData);
  }

  getUserData(): Observable<UserData> {
    return this.userDataValue$;
  }

  setUserDataStorage(): void {
    const data = localStorage.getItem('user-ada');
    let infoUser: UserData = this.userDataInfo;

    if (data) {
      infoUser = JSON.parse(data);
    }
    this.setUserData(data ? infoUser : this.userDataInfo);
  }

  setToken(token: string): void {
    this.token.next(token);
  }

  getToken(): Observable<String> {
    return this.tokenValue$;
  }

  setTokenStorage(): void {
    const token = localStorage.getItem('token-ada') || '';
    this.setToken(token);
  }

  signOut(): void {
    localStorage.removeItem('token-ada');
    this.setToken('');
    this.setUserData(this.userDataInfo);
    this.router.navigate(['/login']);
  }
}
