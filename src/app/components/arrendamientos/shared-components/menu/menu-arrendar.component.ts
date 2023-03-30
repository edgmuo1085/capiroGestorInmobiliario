import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-arrendar',
  templateUrl: './menu-arrendar.component.html',
  styleUrls: ['./menu-arrendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuArrendarComponent {
  items: MenuItem[] = [];

  constructor() {
    this.items = [
      {
        label: 'Información General',
        routerLink: '/arrendamiento/informacion-general',
      },
      {
        label: 'Información Ocupación',
        routerLink: '/arrendamiento/informacion-ocupacion',
      },
      {
        label: 'Referencias',
        routerLink: '/arrendamiento/referencias',
      },
      {
        label: 'Bienes',
        routerLink: '/arrendamiento/bienes',
      },
    ];
  }
}
