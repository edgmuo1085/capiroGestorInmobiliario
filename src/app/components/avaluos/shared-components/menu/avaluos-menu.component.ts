import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-avaluos-menu',
  templateUrl: './avaluos-menu.component.html',
  styleUrls: ['./avaluos-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AvaluosMenuComponent implements OnInit {
  @Input() actualizarAvaluo: boolean = false;
  items: MenuItem[] = [];

  mostrarModal: boolean = false;

  constructor() {}

  ngOnInit(): void {
    let registerUpdate = this.actualizarAvaluo ? 'Actualizar avalúo' : 'Registrar avalúo';
    this.items = [
      { label: 'Avalúos', icon: 'pi pi-fw pi-table', routerLink: ['/avaluos/sesion/listar'] },
      { label: registerUpdate, icon: 'pi pi-fw pi-pencil', routerLink: ['/avaluos/sesion/registrar'] },
    ];
  }

  showDialog() {
    this.mostrarModal = true;
  }

  hideDialog(event: boolean) {
    this.mostrarModal = event;
  }
}
