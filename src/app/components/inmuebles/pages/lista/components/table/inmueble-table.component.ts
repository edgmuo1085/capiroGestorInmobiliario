import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Observable, ReplaySubject } from 'rxjs';
import { ArchivoInmuebleUp, ArchivoInmuebleUpModel } from 'src/app/components/interfaces/archivo-inmueble.interface';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';
import { IdGenerateService } from 'src/app/components/shared/shared-services/id-generate.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';

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
  showModalUpdateImg: boolean = false;
  showUpload: boolean = false;
  showBlockUpImg: boolean = false;
  sizeFotos: number = 0;
  idInmueble: number = 0;
  listaFotos: ResponseArchivo[] = [];
  anexoImgInmuebles: ArchivoInmuebleUp[] = [];
  fotoInsertar: ArchivoInmuebleUp = new ArchivoInmuebleUpModel('', '', 0, 0, '', 0);

  constructor(
    private router: Router,
    private propiedadesService: PropiedadesService,
    private idGenerateService: IdGenerateService,
    private toastCustomService: ToastCustomService
  ) {}

  filterGlobalListaInmuebles(event: any, param: string) {
    this.tableListaInmuebles.filterGlobal(event.target.value, param);
  }

  closeModalUpload(event: any) {
    this.visible = event;
    this.showModalUpdateImg = event;
    if (this.showUpload) {
      this.actionCargarLista.emit(true);
    }
    this.showUpload = false;
    this.showBlockUpImg = false;
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

  actualizarImagenes(inmueble: ResponseInmueble) {
    this.getImagenes(inmueble.id);
    this.showModalUpdateImg = true;
    this.showBlockUpImg = true;
  }

  getImagenes(idInmueble: number) {
    this.propiedadesService.getInmuebleOne(idInmueble).subscribe({
      next: response => {
        if (!response.id) {
          return;
        }
        let inmueblesFotos = this.urlImgInmuebles(response.fotos);
        this.listaFotos = inmueblesFotos;
      },
      error: err => {
        console.error(err);
      },
    });
  }

  urlImgInmuebles(fotoInmueble: ResponseArchivo[]): ResponseArchivo[] {
    for (const item of fotoInmueble) {
      item.url = this.propiedadesService.getArchivosUrlImg(item.nombreArchivo);
    }

    return fotoInmueble;
  }

  async onSubmitModificarImg(event: any) {
    let fotoInfo: ResponseArchivo = event.foto;
    let foto = event.upload;

    for await (const file of foto.files) {
      let base = await this.onFileSelected(file);
      const idUnique = this.idGenerateService.generate();
      let filesNames = file.name.split('.');
      let extension = filesNames.at(-1);
      this.fotoInsertar.nombreArchivo = `${idUnique}.${extension}`;
      this.fotoInsertar.formato = file.type;
      this.fotoInsertar.idUsuario = fotoInfo.idUsuario;
      this.fotoInsertar.idInmueble = fotoInfo.idInmueble;
      this.fotoInsertar.archivo = base;
      this.fotoInsertar.Id = fotoInfo.id;
      this.actualizarDataImg();
    }
  }

  actualizarDataImg() {
    this.propiedadesService.actualizarFoto(this.fotoInsertar).subscribe({
      next: response => {
        if (!response.id) {
          this.toastCustomService.showToast('Información', 'La imagen no ha sido actualizada.', 'warn');
          return;
        }

        this.toastCustomService.showToast('Información', 'Imagen actualizada con éxito.');
        this.getImagenes(this.fotoInsertar.idInmueble);
      },
      error: err => {
        console.error(err);
      },
    });
  }

  onFileSelected(event: any): Promise<string> {
    return new Promise(resolve => {
      this.convertFile(event).subscribe(base64 => {
        resolve(base64);
      });
    });
  }

  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => result.next(window.btoa(event.target.result.toString()));
    return result;
  }
}
