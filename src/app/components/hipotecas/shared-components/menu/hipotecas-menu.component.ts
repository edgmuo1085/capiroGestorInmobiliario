import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-hipotecas-menu',
  templateUrl: './hipotecas-menu.component.html',
  styleUrls: ['./hipotecas-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HipotecasMenuComponent implements OnInit {
  @Input() actualizarAvaluo: boolean = false;
  items: MenuItem[] = [];

  mostrarModal: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let registerUpdate = this.actualizarAvaluo ? 'Actualizar hipoteca' : 'Registrar hipoteca';
    this.items = [
      { label: 'Hipotecas', icon: 'pi pi-fw pi-table', routerLink: ['/hipotecas/sesion/listar'] },
      { label: registerUpdate, icon: 'pi pi-fw pi-pencil', routerLink: ['/hipotecas/sesion/registrar'] },
    ];
  }

  showDialog() {
    this.mostrarModal = true;
  }

  hideDialog(event: boolean) {
    this.mostrarModal = event;
  }
}
