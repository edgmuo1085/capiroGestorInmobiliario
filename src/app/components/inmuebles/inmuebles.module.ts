import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropiedadesArriendoComponent } from './pages/propiedades-arriendo/propiedades-arriendo.component';
import { PropiedadesVentaComponent } from './pages/propiedades-venta/propiedades-venta.component';
import { InmuebleDetalleComponent } from './pages/detalle/inmueble-detalle.component';
import { InmuebleRegistrarComponent } from './pages/registrar/inmueble-registrar.component';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';
import { InmuebleFormComponent } from './pages/registrar/components/form/inmueble-form.component';
import { InmuebleListaComponent } from './pages/registrar/components/lista/inmueble-lista.component';
import { FilesInmuebleComponent } from './pages/registrar/components/files/files-inmueble.component';
import { ModalInmuebleComponent } from './pages/registrar/components/modal/modal-inmueble.component';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { GaleriaInmuebleComponent } from './pages/detalle/components/galeria/galeria-inmueble.component';

@NgModule({
  declarations: [
    PropiedadesArriendoComponent,
    PropiedadesVentaComponent,
    InmuebleDetalleComponent,
    InmuebleRegistrarComponent,
    InmuebleFormComponent,
    InmuebleListaComponent,
    FilesInmuebleComponent,
    ModalInmuebleComponent,
    GaleriaInmuebleComponent,
  ],
  imports: [CommonModule, InmueblesRoutingModule, FormsModule, ReactiveFormsModule, SharedPrimengModulesModule, SharedModulesModule],
})
export class InmueblesModule {}
