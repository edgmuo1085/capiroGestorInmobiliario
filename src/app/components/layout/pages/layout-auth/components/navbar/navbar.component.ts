import { Component } from '@angular/core';
import { MenuNavbar } from 'src/app/components/interfaces/menu-navbar.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { LoginService } from 'src/app/components/shared/shared-services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuItem: MenuNavbar[] = [
    {
      label: 'Inicio',
      link: '/page/home',
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
}
