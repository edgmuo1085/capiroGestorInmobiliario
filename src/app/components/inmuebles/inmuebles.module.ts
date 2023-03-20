import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropiedadesArriendoComponent } from './pages/propiedades-arriendo/propiedades-arriendo.component';
import { PropiedadesVentaComponent } from './pages/propiedades-venta/propiedades-venta.component';
import { InmuebleDetalleComponent } from './pages/detalle/inmueble-detalle.component';
import { InmuebleRegistrarComponent } from './pages/registrar/inmueble-registrar.component';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';

@NgModule({
  declarations: [PropiedadesArriendoComponent, PropiedadesVentaComponent, InmuebleDetalleComponent, InmuebleRegistrarComponent],
  imports: [CommonModule, InmueblesRoutingModule, FormsModule, ReactiveFormsModule, SharedPrimengModulesModule],
})
export class InmueblesModule {}
