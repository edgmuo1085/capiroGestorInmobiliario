import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../../shared-services/login.service';

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
