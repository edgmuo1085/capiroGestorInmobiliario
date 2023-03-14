import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { VariablesService } from 'src/app/shared/shared-modules/services/variables.service';
import { PropiedadesService } from 'src/app/services/propiedades.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'],
})
export class DetallesComponent implements OnInit {
  showBoton: boolean = false;
  tipoDetalle!: string;
  botonVenta!: boolean;
  botonArriendo!: boolean;
  botonContacto!: boolean;

  images: any[] = [];

  constructor(
    private variableService: VariablesService,
    private routerActive: ActivatedRoute,
    private propiedadesService: PropiedadesService
  ) {}

  ngOnInit(): void {
    this.routerActive.params.subscribe((params: Params) => {
      this.tipoDetalle = params['id'];
      console.log(this.tipoDetalle);
    });

    this.showBotones();
    this.variableService.textButtom = this.showBoton;
    this.getImagenes();
  }

  showBotones() {
    if (this.tipoDetalle === 'venta') {
      this.botonVenta = true;
    } else if (this.tipoDetalle === 'arriendo') {
      this.botonArriendo = true;
    } else {
      this.botonContacto = true;
    }
  }

  getImagenes() {
    this.propiedadesService.getImgenes().subscribe((resp: any) => {
      console.log('imagenes', resp.data);
      this.images = resp.data;
    });
  }
}
