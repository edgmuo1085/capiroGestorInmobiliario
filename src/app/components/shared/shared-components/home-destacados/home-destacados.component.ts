import { Component, Input, OnInit } from '@angular/core';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { environment } from 'src/environments/environment';
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
        //console.log(response);
        if (!response.length) {
          return;
        }

        this.listaDestacados = response;
      },
      error: err => {
        console.error(err);
      },
    });
  }

  urlImg(nombre: string): string {
    return this.propiedadesService.getArchivosUrlImg(nombre);
  }
}
