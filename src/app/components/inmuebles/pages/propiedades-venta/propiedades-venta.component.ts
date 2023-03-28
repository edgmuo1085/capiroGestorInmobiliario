import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-propiedades-venta',
  templateUrl: './propiedades-venta.component.html',
  styleUrls: ['./propiedades-venta.component.scss'],
})
export class PropiedadesVentaComponent implements OnInit {
  propiedadesArriendo: ResponseInmueble[] = [];
  display: boolean = false;

  constructor(private router: Router, private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.showPropiedades();
  }

  showPropiedades(masFilter?: any) {
    let filtros = {
      tipoPublicacion: 'Venta',
    };
    let filtersMore = masFilter ? { ...filtros, ...masFilter } : filtros;
    console.log(filtersMore);
    let json = window.btoa(JSON.stringify(filtros));
    this.propiedadesService.getPropiedadesFiltro(json).subscribe({
      next: async response => {
        console.log(response);
        if (!response.length) {
          return;
        }
        let inmueblesLista = await this.recorrerInmuebles(response);
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

  verRequisitos() {
    this.display = true;
  }

  closeModalUpload(event: any) {
    this.display = event;
  }

  downloadImg() {
    const aLink = document.createElement('a');
    aLink.href = environment.arriendoPropiedadImg;
    aLink.setAttribute('download', 'requisitos-arriendo');
    document.body.appendChild(aLink);
    aLink.click();
    document.body.removeChild(aLink);
  }
}
