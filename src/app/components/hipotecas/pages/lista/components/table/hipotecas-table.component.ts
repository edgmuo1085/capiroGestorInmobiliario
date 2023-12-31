import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { DocumentoAvaluoHipoteca } from 'src/app/components/interfaces/documentos-avaluo-hipoteca.interface';
import { ResponseAvaluoHipoteca } from 'src/app/components/interfaces/response-avaluo-hipoteca.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hipotecas-table',
  templateUrl: './hipotecas-table.component.html',
  styleUrls: ['./hipotecas-table.component.scss'],
})
export class HipotecasTableComponent {
  @Input() listaHipotecas: ResponseAvaluoHipoteca[] = [];
  @Input() selectedListaHipotecas: ResponseAvaluoHipoteca[] = [];
  @Input() loading: boolean = false;
  @Input() idUsuario: number = 0;
  @ViewChild('tableListaHipotecas') tableListaHipotecas!: Table;

  documentosAnexos: DocumentoAvaluoHipoteca[] = [];
  nombresHipotecaDocumentos: string[] = environment.nombresHipotecaDocumentos;
  mostrarModalAvaluoHipoteca: boolean = false;
  mostrarDocumentos: boolean = false;
  idAvaluo: number = 0;
  tipoAvaluo: string = '';

  constructor() {}

  filterGlobalListaInmuebles(event: any, param: string) {
    this.tableListaHipotecas.filterGlobal(event.target.value, param);
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
