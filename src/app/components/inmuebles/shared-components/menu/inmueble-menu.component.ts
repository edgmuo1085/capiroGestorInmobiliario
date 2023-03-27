import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-inmueble-menu',
  templateUrl: './inmueble-menu.component.html',
  styleUrls: ['./inmueble-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class InmuebleMenuComponent implements OnInit {
  @Input() actualizarInmueble: boolean = false;
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    let registerUpdate = this.actualizarInmueble ? 'Actualizar inmueble' : 'Registrar inmueble';
    this.items = [
      { label: 'Inmuebles', icon: 'pi pi-fw pi-table', routerLink: ['/inmuebles/sesion/listar'] },
      { label: registerUpdate, icon: 'pi pi-fw pi-pencil', routerLink: ['/inmuebles/sesion/registrar'] },
    ];
  }
}
