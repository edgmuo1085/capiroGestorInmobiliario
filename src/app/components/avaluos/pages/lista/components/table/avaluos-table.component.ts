import { Component, Input, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ResponseAvaluoHipoteca } from 'src/app/components/interfaces/response-avaluo-hipoteca.interface';

@Component({
  selector: 'app-avaluos-table',
  templateUrl: './avaluos-table.component.html',
  styleUrls: ['./avaluos-table.component.scss'],
})
export class AvaluosTableComponent {
  @Input() listaAvaluos: ResponseAvaluoHipoteca[] = [];
  @Input() selectedListaAvaluos: ResponseAvaluoHipoteca[] = [];
  @Input() loading: boolean = false;
  @ViewChild('tableListaAvaluos') tableListaAvaluos!: Table;

  constructor() {}

  filterGlobalListaInmuebles(event: any, param: string) {
    this.tableListaAvaluos.filterGlobal(event.target.value, param);
  }
}
