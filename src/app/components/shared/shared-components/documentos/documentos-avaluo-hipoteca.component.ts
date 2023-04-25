import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { DocumentoUp, DocumentoUpModel } from 'src/app/components/interfaces/archivo-inmueble.interface';
import { DocumentoInmuebleUp } from 'src/app/components/interfaces/img-inmueble.interface';
import { IdGenerateService } from 'src/app/components/shared/shared-services/id-generate.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-documentos-avaluo-hipoteca',
  templateUrl: './documentos-avaluo-hipoteca.component.html',
  styleUrls: ['./documentos-avaluo-hipoteca.component.scss'],
})
export class DocumentosAvaluoHipotecaComponent implements OnDestroy {
  @Input() idUsuario: number = 0;
  @Input() idAvaluo: number = 0;
  @Input() titleCampo: string = '';
  @Output() actionCargarImg: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actionMsgTituloPage: EventEmitter<string> = new EventEmitter<string>();

  multiple: boolean = false;
  uploadedFiles: DocumentoInmuebleUp[] = [];

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
    let json: DocumentoInmuebleUp = {} as DocumentoInmuebleUp;

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
        idInmueble: 0,
        idAvaluo: this.idAvaluo,
        archivo: file.type,
        tipoDocumento: environment.rutaDoc,
      };
      this.uploadedFiles = [...this.uploadedFiles, json];
    }

    for await (const [index, file] of arrayFiles.entries()) {
      this.uploadFileOne(index, file, this.uploadedFiles[index].nombreSinExt);
      this.enviarDataDocumento(this.uploadedFiles[index]);
    }
  }

  uploadFileOne(index: number, file: File, nombreSinExt: string) {
    this.uploadedFiles[index].progress = 0;
    const formData: FormData = new FormData();
    formData.append('guardar', 'true');
    formData.append('tipoDocumento', environment.rutaDoc);
    formData.append('nombreImg', nombreSinExt);
    formData.append('archivoCapiro', file);
    this.propiedadesService.getUploadPhotoHosting(formData).subscribe({
      next: event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            this.uploadedFiles[index].progress = Math.round((100 * event.loaded) / file.size);
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

  async enviarDataDocumento(item: DocumentoInmuebleUp) {
    const fotoInsertar: DocumentoUp = new DocumentoUpModel(
      item.nombreArchivo,
      item.formato,
      item.idUsuario,
      item.archivo,
      item.idAvaluo,
      item.tipoDocumento
    );

    this.propiedadesService.guardarDocumento(fotoInsertar).subscribe({
      next: response => {
        this.toastCustomService.showToast('Información', 'Documento anexados con éxito.');
      },
      error: err => {
        console.error(err);
      },
    });
  }

  clearImg() {
    this.uploadedFiles = [];
  }
}
