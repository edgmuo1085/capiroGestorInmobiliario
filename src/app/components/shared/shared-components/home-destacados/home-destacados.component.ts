import { Component, Input, OnInit } from '@angular/core';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { PropiedadesService } from '../../shared-services/propiedades.service';

@Component({
  selector: 'app-home-destacados',
  templateUrl: './home-destacados.component.html',
  styleUrls: ['./home-destacados.component.scss'],
})
export class HomeDestacadosComponent implements OnInit {
  @Input() isLogging: string = '';
  listaDestacados: ResponseInmueble[] = [];

  constructor(private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.propiedadesService.getPropiedadesDestacados().subscribe({
      next: response => {
        if (!response.length) {
          return;
        }

        const lista = this.urlImgDestacados(response);
        this.listaDestacados = lista;
      },
      error: err => {
        console.error(err);
      },
    });
  }

  urlImgDestacados(destacados: ResponseInmueble[]): ResponseInmueble[] {
    for (const item of destacados) {
      item.url = item.fotos.length
        ? this.propiedadesService.getArchivosUrlImg(item.fotos[0].nombreArchivo)
        : './assets/images/not-found-img.jpg';
    }
    return destacados;
  }
}
