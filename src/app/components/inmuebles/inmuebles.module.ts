import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropiedadesArriendoComponent } from './pages/propiedades-arriendo/propiedades-arriendo.component';
import { PropiedadesVentaComponent } from './pages/propiedades-venta/propiedades-venta.component';

@NgModule({
  declarations: [
    PropiedadesArriendoComponent,
    PropiedadesVentaComponent
  ],
  imports: [CommonModule, InmueblesRoutingModule, FormsModule, ReactiveFormsModule],
})
export class InmueblesModule {}
