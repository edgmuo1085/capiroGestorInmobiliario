import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';

@Component({
  selector: 'app-images-inmueble',
  templateUrl: './images-inmueble.component.html',
  styleUrls: ['./images-inmueble.component.scss'],
})
export class ImagesInmuebleComponent implements OnChanges {
  @Input() images: ResponseArchivo[] = [];
  responsiveOptions: any;

  constructor(private propiedadesService: PropiedadesService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('images')) {
      if (this.images.length) {
        this.images = this.urlImgDestacados(this.images);
      }
    }
  }

  urlImgDestacados(imagenes: ResponseArchivo[]): ResponseArchivo[] {
    for (const item of imagenes) {
      item.url = this.propiedadesService.getArchivosUrlImg(item.nombreArchivo);
    }
    return imagenes;
  }
}
