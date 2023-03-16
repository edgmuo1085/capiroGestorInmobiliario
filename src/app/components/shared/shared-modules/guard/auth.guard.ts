import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataUserService } from '../../shared-services/data-user.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private dataUserService: DataUserService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.dataUserService.enableToken()) {
      return true;
    }

    Swal.fire({
      position: 'center',
      icon: 'info',
      text: 'Debe  iniciar sesión',
      showConfirmButton: false,
      timer: 3500,
    });
    this.router.navigate(['/login']);
    return false;
  }
}
