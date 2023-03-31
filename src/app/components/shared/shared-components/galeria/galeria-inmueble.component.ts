import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';

@Component({
  selector: 'app-galeria-inmueble',
  templateUrl: './galeria-inmueble.component.html',
  styleUrls: ['./galeria-inmueble.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GaleriaInmuebleComponent implements OnChanges {
  @Input() fotosInmueble: ResponseArchivo[] = [];
  responsiveOptions: any;

  constructor() {
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
    if (changes.hasOwnProperty('fotosInmueble')) {
      if (!this.fotosInmueble.length) {
        this.fotosInmueble = [
          {
            ruta: './assets/images/not-found-img.jpg',
            nombreArchivo: 'not found ',
          } as ResponseArchivo,
        ];
      }
    }
  }
}
