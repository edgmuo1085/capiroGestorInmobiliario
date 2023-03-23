import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ArchivoInmueble } from 'src/app/components/interfaces/archivo-inmueble.interface';
import { IdGenerateService } from 'src/app/components/shared/shared-services/id-generate.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';

@Component({
  selector: 'app-files-inmueble',
  templateUrl: './files-inmueble.component.html',
  styleUrls: ['./files-inmueble.component.scss'],
})
export class FilesInmuebleComponent implements OnDestroy {
  @Input() idUsuario: number = 0;
  @Input() idInmueble: number = 0;
  @Input() sizeFotos: number = 3;
  @Output() actionCargarImg: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actionMsgTituloPage: EventEmitter<string> = new EventEmitter<string>();

  multiple: boolean = true;
  anexoImgInmuebles: ArchivoInmueble[] = [];
  base64Output: string = '';

  constructor(
    private propiedadesService: PropiedadesService,
    private toastCustomService: ToastCustomService,
    private idGenerateService: IdGenerateService
  ) {}

  ngOnDestroy(): void {
    this.anexoImgInmuebles = [];
  }

  async subirImagenes(data: any) {
    console.log(data.files.length);
    let conteoSizeFiles: number = 0;

    for await (const file of data.files) {
      let base = await this.onFileSelected(file);
      const idUnique = this.idGenerateService.generate();
      let filesNames = file.name.split('.');
      let extension = filesNames.at(-1);
      this.anexoImgInmuebles.push({
        nombreArchivo: `${idUnique}.${extension}`,
        formato: file.type,
        idUsuario: this.idUsuario,
        idInmueble: this.idInmueble,
        archivo: base,
      });

      conteoSizeFiles++;

      if (conteoSizeFiles > this.sizeFotos) {
        break;
      }
    }
    this.enviarDataImg();
    console.log('Objeto imagen', this.anexoImgInmuebles);
  }

  async enviarDataImg() {
    for await (const item of this.anexoImgInmuebles) {
      this.propiedadesService.guardarFoto(item).subscribe({
        next: resp => {
          console.log('respuesta imagenes', resp);
        },
        error: err => {
          console.error(err);
        },
      });
    }

    this.actionCargarImg.emit(false);
    this.actionMsgTituloPage.emit('Registrar inmueble');
    this.toastCustomService.showToas('Información', 'Imágenes anexadas con éxtio.');
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

  clearImg() {
    this.anexoImgInmuebles = [];
  }

  remover(event: any) {
    console.log(event);
  }
}
