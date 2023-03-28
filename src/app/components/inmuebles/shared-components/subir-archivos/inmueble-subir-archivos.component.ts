import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ArchivoInmueble, ArchivoInmuebleModel } from 'src/app/components/interfaces/archivo-inmueble.interface';
import { IdGenerateService } from 'src/app/components/shared/shared-services/id-generate.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';

@Component({
  selector: 'app-inmueble-subir-archivos',
  templateUrl: './inmueble-subir-archivos.component.html',
  styleUrls: ['./inmueble-subir-archivos.component.scss'],
})
export class InmuebleSubirArchivosComponent {
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
  }

  async enviarDataImg() {
    for await (const item of this.anexoImgInmuebles) {
      let fotoInsertar: ArchivoInmueble = new ArchivoInmuebleModel(
        item.nombreArchivo,
        item.formato,
        item.idUsuario,
        item.idInmueble,
        item.archivo
      );

      this.propiedadesService.guardarFoto(fotoInsertar).subscribe({
        next: response => {},
        error: err => {
          console.error(err);
        },
      });
    }

    this.actionCargarImg.emit(false);
    this.actionMsgTituloPage.emit('Registrar inmueble');
    this.toastCustomService.showToast('Información', 'Imágenes anexadas con éxito.');
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
}
