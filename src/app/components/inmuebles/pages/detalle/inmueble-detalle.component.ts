import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { StepArrendamientosService } from 'src/app/components/shared/shared-services/step-arrendamientos.service';
import { StorageLocalService } from 'src/app/components/shared/shared-services/storage-local.service';
import { environment } from 'src/environments/environment';

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
    private router: Router,
    private routerActive: ActivatedRoute,
    private propiedadesService: PropiedadesService,
    private dataUserService: DataUserService,
    private stepArrendarService: StepArrendamientosService,
    private storageService: StorageLocalService
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

  arriendo() {
    this.stepArrendarService.clearObservablesArrendamiento();
    this.storageService.localSet(environment.storageKey.idInmuebleArriendo, this.idInmueble);
    this.router.navigate(['/arrendamiento' + this.isLogging + '/informacion-general']);
  }
}
