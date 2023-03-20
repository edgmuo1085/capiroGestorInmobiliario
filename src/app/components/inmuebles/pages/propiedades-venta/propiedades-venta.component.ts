import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';

@Component({
  selector: 'app-propiedades-venta',
  templateUrl: './propiedades-venta.component.html',
  styleUrls: ['./propiedades-venta.component.scss'],
})
export class PropiedadesVentaComponent implements OnInit {
  propiedades: any[] = [];
  filtroHab!: any;
  filtroPre!: any;
  filtroEstado!: any;
  filtroTipo!: any;
  display: boolean = false;

  constructor(private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.showPropiedades();
  }

  showPropiedades() {
    this.propiedadesService.ventaPropiedades().subscribe(resp => {
      this.propiedades = [resp];
      console.log(this.propiedades);
    });
  }

  limpiarFiltros() {
    (this.filtroHab = ''), (this.filtroPre = ''), (this.filtroEstado = ''), (this.filtroTipo = '');
  }

  showDialog() {
    this.display = true;
  }

  downloadImg(url: any, name: any) {
    //saveAs(url, name + '.png');
  }
}
