import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataUserService } from '../../shared-services/data-user.service';
import { StepArrendamientosService } from '../../shared-services/step-arrendamientos.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private dataUserService: DataUserService, private stepArrendarService: StepArrendamientosService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.dataUserService.enableToken()) {
      return true;
    }

    this.stepArrendarService.clearObservablesArrendamiento();
    this.router.navigate(['/page']);
    return false;
  }
}
