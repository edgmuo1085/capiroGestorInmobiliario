import { Component } from '@angular/core';
import { MenuNavbar } from 'src/app/components/interfaces/menu-navbar.interface';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private toast: ToastCustomService) {}

  menuItem: MenuNavbar[] = [
    {
      label: 'Registre su inmueble',
      link: '/inmuebles/sesion/listar',
      
    },
    {
      label: 'Avalúos',
      link: '/avaluos/sesion/listar',
    },
    {
      label: 'Hipotecas',
      link: '/hipotecas/sesion/listar',
    },
    {
      label: 'Inmuebles',
      link: '/inmuebles',
      children: [
        {
          title: 'Propiedades en arriendo',
          link: '/inmuebles/arriendo',
        },
        {
          title: 'Propiedades en venta',
          link: '/inmuebles/venta',
        },
      ],
    },
    {
      label: 'Nosotros',
      link: '/page/nosotros',
    },
    {
      label: 'Ingresar',
      link: '/page/login',
    },
    {
      label: 'Registrarse',
      link: '/page/registro',
    },
  ];

  showMessage(label: string) {
    if (label === 'Registre su inmueble') {
      this.toast.showToast('Información', 'Debe iniciar sesión o registrarse, para registrar un inmueble.','info');
    } else if (label === 'Avalúos') {
      this.toast.showToast('Información', 'Debe iniciar sesión o registrarse, para acceder a los avalúos.','info');
    } else if (label === 'Hipotecas') {
      this.toast.showToast('Información', 'Debe iniciar sesión o registrarse, para acceder a las hipotecas.','info');
    }
  }
}



