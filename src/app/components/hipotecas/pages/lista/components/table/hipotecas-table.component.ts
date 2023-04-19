import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ResponseAvaluoHipoteca } from 'src/app/components/interfaces/response-avaluo-hipoteca.interface';

@Component({
  selector: 'app-hipotecas-table',
  templateUrl: './hipotecas-table.component.html',
  styleUrls: ['./hipotecas-table.component.scss'],
})
export class HipotecasTableComponent {
  @Input() listaHipotecas: ResponseAvaluoHipoteca[] = [];
  @Input() selectedListaHipotecas: ResponseAvaluoHipoteca[] = [];
  @Input() loading: boolean = false;
  @ViewChild('tableListaHipotecas') tableListaHipotecas!: Table;

  constructor() {}

  filterGlobalListaInmuebles(event: any, param: string) {
    this.tableListaHipotecas.filterGlobal(event.target.value, param);
  }
}
