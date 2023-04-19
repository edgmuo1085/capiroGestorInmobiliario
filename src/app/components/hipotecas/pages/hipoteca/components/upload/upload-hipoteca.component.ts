import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { ArchivoInmueble, ArchivoInmuebleModel } from 'src/app/components/interfaces/archivo-inmueble.interface';
import { ImagesInmuebleUp } from 'src/app/components/interfaces/img-inmueble.interface';
import { IdGenerateService } from 'src/app/components/shared/shared-services/id-generate.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';

@Component({
  selector: 'app-upload-hipoteca',
  templateUrl: './upload-hipoteca.component.html',
  styleUrls: ['./upload-hipoteca.component.scss'],
})
export class UploadHipotecaComponent implements OnDestroy {
  @Input() idUsuario: number = 0;
  @Input() idInmueble: number = 0;
  @Input() titleCampo: string = '';
  @Output() actionCargarImg: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actionMsgTituloPage: EventEmitter<string> = new EventEmitter<string>();

  multiple: boolean = false;
  uploadedFiles: ImagesInmuebleUp[] = [];

  constructor(
    private propiedadesService: PropiedadesService,
    private toastCustomService: ToastCustomService,
    private idGenerateService: IdGenerateService
  ) {}

  ngOnDestroy(): void {
    this.uploadedFiles = [];
  }

  async onBasicUploadAuto(event: any) {
    this.uploadedFiles = [];
    const arrayFiles: File[] = event.files;
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
      };
      this.uploadedFiles = [...this.uploadedFiles, json];
    }

    for await (const [index, file] of arrayFiles.entries()) {
      console.log(file);

      this.uploadFileOne(index, file, this.uploadedFiles[index].nombreSinExt);
      //this.enviarDataImg(this.uploadedFiles[index]);
    }
  }

  uploadFileOne(index: number, file: File, nombreSinExt: string) {
    this.uploadedFiles[index].progress = 0;
    const formData: FormData = new FormData();
    formData.append('guardar', 'true');
    formData.append('tipoDocumento', 'documentos');
    formData.append('nombreImg', nombreSinExt);
    formData.append('archivoCapiro', file);
    this.propiedadesService.getUploadPhotoHosting(formData).subscribe({
      next: event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.uploadedFiles[index].progress = Math.round((100 * event.loaded) / file.size);
            //this.terminarProgreso();
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

  async enviarDataImg(item: ImagesInmuebleUp) {
    const fotoInsertar: ArchivoInmueble = new ArchivoInmuebleModel(
      item.nombreArchivo,
      item.formato,
      item.idUsuario,
      item.idInmueble,
      item.archivo
    );

    this.propiedadesService.guardarFoto(fotoInsertar).subscribe({
      next: response => {
        this.toastCustomService.showToast('Información', 'Imágenes anexadas con éxito.');
      },
      error: err => {
        console.error(err);
      },
    });
  }

  clearImg() {
    this.uploadedFiles = [];
  }

  terminarProgreso() {
    let progreso = this.uploadedFiles.find(item => item.progress !== 100);
    if (!progreso) {
      this.actionCargarImg.emit(false);
      this.actionMsgTituloPage.emit('Registrar inmueble');
    }
  }
}
