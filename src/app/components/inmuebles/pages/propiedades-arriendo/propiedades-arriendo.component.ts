import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-propiedades-arriendo',
  templateUrl: './propiedades-arriendo.component.html',
  styleUrls: ['./propiedades-arriendo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PropiedadesArriendoComponent implements OnInit {
  propiedadesArriendo: ResponseInmueble[] = [];
  mostrarModal: boolean = false;

  constructor(private router: Router, private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.showPropiedades();
  }

  showPropiedades(masFilter?: any) {
    this.propiedadesArriendo = [];
    let filtros = {
      tipoPublicacion: 'Arriendo',
    };
    let filtersMore = masFilter ? { ...filtros, ...masFilter } : filtros;
    let json = window.btoa(JSON.stringify(filtersMore));
    this.propiedadesService.getPropiedadesFiltro(json).subscribe({
      next: async response => {
        if (!response.length) {
          return;
        }
        const inmueblesLista = await this.recorrerInmuebles(response);
        this.propiedadesArriendo = inmueblesLista;
      },
      error: err => {
        console.error(err);
      },
    });
  }

  async recorrerInmuebles(inmuebles: ResponseInmueble[]): Promise<ResponseInmueble[]> {
    for await (const item of inmuebles) {
      let inmuebles = this.urlImgInmuebles(item.fotos);
      item.fotos = inmuebles;
    }
    return inmuebles;
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

  showDialog() {
    console.log("entra")
    this.mostrarModal = true;
  }

  hideDialog(event: boolean) {
    this.mostrarModal = event;
  }
}
