import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  estado!: string;

  constructor(private loginService: LoginService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loginService.estado.subscribe(estado => {
      this.estado = estado;
    });

    if (!localStorage.getItem('token') && this.estado !== 'A') {
      Swal.fire({
        position: 'center',
        icon: 'info',
        text: 'Debe  iniciar sesión',
        showConfirmButton: false,
        timer: 3500,
      });
      return false;
    }

    return true;
  }
}
