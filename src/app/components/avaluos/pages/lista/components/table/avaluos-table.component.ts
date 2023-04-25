import { Component, Input, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DocumentoAvaluoHipoteca } from 'src/app/components/interfaces/documentos-avaluo-hipoteca.interface';
import { ResponseAvaluoHipoteca } from 'src/app/components/interfaces/response-avaluo-hipoteca.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-avaluos-table',
  templateUrl: './avaluos-table.component.html',
  styleUrls: ['./avaluos-table.component.scss'],
})
export class AvaluosTableComponent {
  @Input() listaAvaluos: ResponseAvaluoHipoteca[] = [];
  @Input() selectedListaAvaluos: ResponseAvaluoHipoteca[] = [];
  @Input() loading: boolean = false;
  @Input() idUsuario: number = 0;
  @ViewChild('tableListaAvaluos') tableListaAvaluos!: Table;

  documentosAnexos: DocumentoAvaluoHipoteca[] = [];
  nombresAvaluoDocumentos: string[] = environment.nombresAvaluoDocumentos;
  mostrarModalAvaluoHipoteca: boolean = false;
  mostrarDocumentos: boolean = false;
  idAvaluo: number = 0;
  tipoAvaluo: string = '';

  constructor() {}

  filterGlobalListaInmuebles(event: any, param: string) {
    this.tableListaAvaluos.filterGlobal(event.target.value, param);
  }

  mostrarModal(item: ResponseAvaluoHipoteca) {
    this.idAvaluo = item.id;
    this.mostrarModalAvaluoHipoteca = true;
  }

  mostrarDocumentosAnexos(item: ResponseAvaluoHipoteca) {
    if (!item.documentos.length) {
      return;
    }
    this.tipoAvaluo = item.tipoInmueble;
    this.documentosAnexos = item.documentos;
    this.mostrarDocumentos = true;
  }

  closeModalAvaluoHipoteca(event: boolean) {
    this.mostrarModalAvaluoHipoteca = event;
    this.mostrarDocumentos = event;
  }
}
