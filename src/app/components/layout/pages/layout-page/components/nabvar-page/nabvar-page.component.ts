import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MenuItem, MenuNavbar } from 'src/app/components/interfaces/menu-navbar.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';

@Component({
  selector: 'app-nabvar-page',
  templateUrl: './nabvar-page.component.html',
  styleUrls: ['./nabvar-page.component.scss'],
})
export class NabvarPageComponent implements OnInit {
  usuario: string = '';
  menuItem: MenuNavbar[] = [
    {
      label: 'Anuncie su inmueble',
      link: '/inmuebles/sesion/registrar',
    },
    {
      label: 'Avalúos',
      link: '/avaluos/sesion',
    },
    {
      label: 'Hipotecas',
      link: '/hipotecas/sesion',
    },
    {
      label: 'Inmuebles',
      link: '/inmuebles/auth',
      children: [
        {
          title: 'Propiedades en arriendo',
          link: '/inmuebles/sesion/arriendo',
        },
        {
          title: 'Propiedades en venta',
          link: '/inmuebles/sesion/venta',
        },
      ],
    },
    {
      label: 'Nosotros',
      link: '/page/sesion/nosotros',
    },
  ];

  constructor(private dataUserService: DataUserService, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.dataUserService.getUserData().subscribe(response => {
      this.usuario = `${response.nombres} ${response.apellidos}`;
      const itemUsuario = {
        label: `${response.nombres} ${response.apellidos}`,
        link: '/dashboard',
        icon: 'fa-solid fa-globe',
        children: [
          {
            title: 'Cerrar sesión',
            link: '/signout',
            icon: 'fa-solid fa-globe',
          },
        ],
      };

      this.menuItem = [...this.menuItem, itemUsuario];
    });
  }

  modalCloseSesion(menu: MenuItem): void {
    if (menu.link === '/signout') {
      this.confirmationService.confirm({
        key: 'signout',
        message: '¿Desea cerrar sesión?',
        accept: () => {
          this.dataUserService.signOut();
        },
      });
    }
  }
}
