import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../Services/propiedades.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css'],
})
export class PropiedadesComponent implements OnInit {
  propiedades: any[] = [];
  filtroHab!: any;
  filtroPre!: any;
  filtroEstado!: any;
  filtroTipo!: any;

  constructor(private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.getPropiedades();
    this.showPropiedades();
  }

  getPropiedades() {
    this.propiedadesService.getPropiedades().subscribe(data => {
      console.log('data Propiedades', data);
    });
  }

  showPropiedades() {
    this.propiedadesService.todasPropiedades().subscribe(resp => {
      this.propiedades = [resp];
      console.log(this.propiedades);
    });
  }

  limpiarFiltros() {
    (this.filtroHab = ''), (this.filtroPre = ''), (this.filtroEstado = ''), (this.filtroTipo = '');
  }
}
