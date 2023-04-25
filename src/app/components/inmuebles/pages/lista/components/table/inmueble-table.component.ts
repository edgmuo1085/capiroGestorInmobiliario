import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ArchivoInmuebleUp, ArchivoInmuebleUpModel } from 'src/app/components/interfaces/archivo-inmueble.interface';
import { ImagesInmuebleUp } from 'src/app/components/interfaces/img-inmueble.interface';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';
import { IdGenerateService } from 'src/app/components/shared/shared-services/id-generate.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';
import { environment } from 'src/environments/environment';

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
  uploadedFiles: ImagesInmuebleUp[] = [];
  fotoInsertar: ArchivoInmuebleUp = new ArchivoInmuebleUpModel('', '', 0, 0, '', '', 0);

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
    this.sizeFotos = 4 - inmueble.fotos.length;
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
        this.listaFotos = response.fotos;
      },
      error: err => {
        console.error(err);
      },
    });
  }

  async onSubmitModificarImg(event: any) {
    let fotoInfo: ResponseArchivo = event.foto;
    let foto = event.upload;

    this.uploadedFiles = [];
    const arrayFiles: File[] = foto.files;
    let json: ImagesInmuebleUp = {} as ImagesInmuebleUp;

    for (const file of arrayFiles) {
      const idUnique = this.idGenerateService.generate();
      let filesNames = file.name.split('.');
      let extension = filesNames.at(-1);
      json = {
        nameFile: file.name,
        sizeFile: file.size,
        progress: 0,
        nombreArchivo: `${idUnique}.${extension}`,
        nombreSinExt: `${idUnique}`,
        formato: file.type,
        idUsuario: this.idUsuario,
        idInmueble: this.idInmueble,
        archivo: file.type,
        tipoDocumento: environment.rutaImg,
      };
      this.fotoInsertar.nombreArchivo = `${idUnique}.${extension}`;
      this.fotoInsertar.formato = file.type;
      this.fotoInsertar.idUsuario = fotoInfo.idUsuario;
      this.fotoInsertar.idInmueble = fotoInfo.idInmueble;
      this.fotoInsertar.archivo = 'base';
      this.fotoInsertar.tipoDocumento = environment.rutaImg;
      this.fotoInsertar.Id = fotoInfo.id;
      this.uploadedFiles = [...this.uploadedFiles, json];
    }

    for await (const [index, file] of arrayFiles.entries()) {
      this.actualizarDataImg();
      this.uploadFileOne(index, file, this.uploadedFiles[index].nombreSinExt);
    }
  }

  uploadFileOne(index: number, file: File, nombreSinExt: string) {
    this.uploadedFiles[index].progress = 0;
    const formData: FormData = new FormData();
    formData.append('guardar', 'true');
    formData.append('tipoDocumento', environment.rutaImg);
    formData.append('nombreImg', nombreSinExt);
    formData.append('archivoCapiro', file);
    this.propiedadesService.getUploadPhotoHosting(formData).subscribe({
      next: event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.uploadedFiles[index].progress = Math.round((100 * event.loaded) / file.size);
            if (this.uploadedFiles[index].progress === 100) {
              setTimeout(() => {
                this.getImagenes(this.fotoInsertar.idInmueble);
              }, 1500);
            }
            break;
          case HttpEventType.Response:
            break;
        }
      },
      error: err => {
        console.error(err);
        this.uploadedFiles[index].progress = 0;
      },
    });
  }

  actualizarDataImg() {
    this.propiedadesService.actualizarArchivoAdjunto(this.fotoInsertar).subscribe({
      next: response => {
        if (!response.id) {
          this.toastCustomService.showToast('Información', 'La imagen no ha sido actualizada.', 'warn');
          return;
        }

        this.toastCustomService.showToast('Información', 'Imagen actualizada con éxito.');
      },
      error: err => {
        console.error(err);
      },
    });
  }
}
