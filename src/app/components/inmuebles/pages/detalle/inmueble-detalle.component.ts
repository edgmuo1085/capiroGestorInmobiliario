import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';

@Component({
  selector: 'app-inmueble-detalle',
  templateUrl: './inmueble-detalle.component.html',
  styleUrls: ['./inmueble-detalle.component.scss'],
})
export class InmuebleDetalleComponent implements OnInit {
  showBoton: boolean = false;
  idInmueble: number = 0;
  botonVenta: boolean = false;
  botonArriendo: boolean = false;
  botonContacto: boolean = false;
  infoInmueble: ResponseInmueble = {} as ResponseInmueble;
  fotosInmueble: ResponseArchivo[] = [];
  isLogging: string = '';

  constructor(
    private routerActive: ActivatedRoute,
    private propiedadesService: PropiedadesService,
    private dataUserService: DataUserService
  ) {
    this.routerActive.params.subscribe((params: Params) => {
      this.idInmueble = +params['inmueble'];
    });
    this.isLogging = this.dataUserService.enableToken() ? '/sesion' : '';
  }

  ngOnInit(): void {
    this.getImagenes();
  }

  getImagenes() {
    this.propiedadesService.getInmuebleOne(this.idInmueble).subscribe({
      next: response => {
        if (!response.id) {
          return;
        }
        this.infoInmueble = response;
        this.showBotones(response.tipoPublicacion);
        let inmueblesFotos = this.urlImgInmuebles(response.fotos);
        this.fotosInmueble = inmueblesFotos;
      },
      error: err => {
        console.error(err);
      },
    });
  }

  urlImgInmuebles(fotoInmueble: ResponseArchivo[]): ResponseArchivo[] {
    if (!fotoInmueble.length) {
      return [];
    }

    for (const item of fotoInmueble) {
      item.url = this.propiedadesService.getArchivosUrlImg(item.nombreArchivo);
    }

    return fotoInmueble;
  }

  showBotones(tipoPublicacion: string) {
    if (tipoPublicacion === 'Venta') {
      this.botonVenta = true;
    } else if (tipoPublicacion === 'Arriendo') {
      this.botonArriendo = true;
    } else {
      this.botonContacto = true;
    }
  }
}
