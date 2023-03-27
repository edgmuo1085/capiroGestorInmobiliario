import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';

@Component({
  selector: 'app-inmueble-table',
  templateUrl: './inmueble-table.component.html',
  styleUrls: ['./inmueble-table.component.scss'],
})
export class InmuebleTableComponent {
  @Input() listaInmuebles: ResponseInmueble[] = [];
  @Input() selectedListaInmuebles: ResponseInmueble[] = [];
  @Input() idUsuario: number = 0;
  @Input() loading: boolean = false;
  @Output() actionCargarLista: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('tableListaInmuebles') tableListaInmuebles!: Table;
  visible: boolean = false;
  showUpload: boolean = false;
  idInmueble: number = 0;
  sizeFotos: number = 0;
  listaImages: ResponseArchivo[] = [];

  constructor(private router: Router) {}

  filterGlobalListaInmuebles(event: any, param: string) {
    this.tableListaInmuebles.filterGlobal(event.target.value, param);
  }

  closeModalUpload(event: any) {
    this.visible = event;
    if (this.showUpload) {
      this.actionCargarLista.emit(true);
    }
    this.showUpload = false;
    this.actionCargarLista.emit(false);
  }

  mostrarImg(event: ResponseInmueble) {
    this.visible = true;
    this.showUpload = false;
    this.router.navigate(['/inmuebles/sesion/detalle/', event.id]);
  }

  subirImg(inmueble: ResponseInmueble) {
    this.idInmueble = inmueble.id;
    this.sizeFotos = 3 - inmueble.fotos.length;
    this.visible = true;
    this.showUpload = true;
  }

  actionEditInmueble(idInmueble: number) {
    this.router.navigate(['/inmuebles/sesion/actualizar/', idInmueble]);
  }
}
