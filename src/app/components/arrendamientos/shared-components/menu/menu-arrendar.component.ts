import { Component, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';

@Component({
  selector: 'app-menu-arrendar',
  templateUrl: './menu-arrendar.component.html',
  styleUrls: ['./menu-arrendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuArrendarComponent {
  items: MenuItem[] = [];
  isLogging: string = '';

  constructor(private dataUserService: DataUserService) {
    this.isLogging = this.dataUserService.enableToken() ? '/sesion' : '';
    this.items = [
      {
        label: 'Información General',
        routerLink: '/arrendamiento' + this.isLogging + '/informacion-general',
      },
      {
        label: 'Información Ocupación',
        routerLink: '/arrendamiento' + this.isLogging + '/informacion-ocupacion',
      },
      {
        label: 'Referencias',
        routerLink: '/arrendamiento' + this.isLogging + '/referencias',
      },
      {
        label: 'Bienes',
        routerLink: '/arrendamiento' + this.isLogging + '/bienes',
      },
    ];
  }
}
