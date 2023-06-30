import { Component } from '@angular/core';
import { ToastCustomService } from '../../shared-services/toast-custom.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-servicios',
  templateUrl: './home-servicios.component.html',
  styleUrls: ['./home-servicios.component.scss'],
})
export class HomeServiciosComponent {
  constructor(private toast: ToastCustomService,private router: Router) {}
  mostrarSweetAlert() {
    this.toast.showToast('Información', 'Debe iniciar sesión o registrarse, para gestionar su prestamo.', 'info');
  }
  mostrarSweetAlert2() {
    this.toast.showToast('Información', 'Debe iniciar sesión o registrarse, para gestionar su trámite.', 'info');
  }
  irArriendo() {
    this.router.navigate(['/inmuebles/arriendo']);
  }
  irVenta() {
    this.router.navigate(['/inmuebles/venta']);
  }
}
