import { Component, Input } from '@angular/core';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';

@Component({
  selector: 'app-galeria-inmueble',
  templateUrl: './galeria-inmueble.component.html',
  styleUrls: ['./galeria-inmueble.component.scss'],
})
export class GaleriaInmuebleComponent {
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
}
