import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';

@Component({
  selector: 'app-inmueble-detalle',
  templateUrl: './inmueble-detalle.component.html',
  styleUrls: ['./inmueble-detalle.component.scss'],
})
export class InmuebleDetalleComponent implements OnInit {
  showBoton: boolean = false;
  tipoDetalle!: string;
  botonVenta!: boolean;
  botonArriendo!: boolean;
  botonContacto!: boolean;

  images: any[] = [];

  constructor(private routerActive: ActivatedRoute, private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.routerActive.params.subscribe((params: Params) => {
      this.tipoDetalle = params['id'];
      console.log(this.tipoDetalle);
    });

    this.showBotones();
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
