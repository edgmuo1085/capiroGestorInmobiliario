import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PropiedadesInmuebles } from 'src/app/components/interfaces/response-propiedades.interface';
import { PropiedadesService } from '../../shared-services/propiedades.service';

@Component({
  selector: 'app-home-destacados',
  templateUrl: './home-destacados.component.html',
  styleUrls: ['./home-destacados.component.scss'],
})
export class HomeDestacadosComponent implements OnInit {
  @Input() isLogging: string = '';
  listaDestacados: PropiedadesInmuebles[] = [];

  constructor(private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.propiedadesService.getPropiedadesDestacados().subscribe({
      next: response => {
        console.log(response);
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
}
