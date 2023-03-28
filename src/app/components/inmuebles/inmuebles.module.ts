import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';

import { InmuebleDetalleComponent } from './pages/detalle/inmueble-detalle.component';
import { PropiedadesArriendoComponent } from './pages/propiedades-arriendo/propiedades-arriendo.component';
import { PropiedadesVentaComponent } from './pages/propiedades-venta/propiedades-venta.component';
import { InmuebleRegistrarComponent } from './pages/registrar/inmueble-registrar.component';
import { InmuebleListaComponent } from './pages/lista/inmueble-lista.component';
import { InmuebleMenuComponent } from './shared-components/menu/inmueble-menu.component';
import { InmuebleTableComponent } from './pages/lista/components/table/inmueble-table.component';
import { InmuebleSubirArchivosComponent } from './shared-components/subir-archivos/inmueble-subir-archivos.component';
import { InmuebleFormComponent } from './pages/registrar/components/form/inmueble-form.component';
import { InmueblesFotosUpdateComponent } from './pages/lista/components/lista-fotos/inmuebles-fotos-update.component';
import { InmueblesFiltrosComponent } from './shared-components/filtros/inmuebles-filtros.component';
import { InmueblePropiedadItemComponent } from './shared-components/item-propiedad/inmueble-propiedad-item.component';
import { ModalInmuebleComponent } from './shared-components/modal/modal-inmueble.component';

@NgModule({
  declarations: [
    InmuebleDetalleComponent,
    PropiedadesArriendoComponent,
    PropiedadesVentaComponent,
    InmuebleRegistrarComponent,
    InmuebleListaComponent,
    InmuebleMenuComponent,
    InmuebleTableComponent,
    InmuebleSubirArchivosComponent,
    InmuebleFormComponent,
    InmueblesFotosUpdateComponent,
    InmueblesFiltrosComponent,
    InmueblePropiedadItemComponent,
    ModalInmuebleComponent,
  ],
  imports: [
    CommonModule,
    InmueblesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPrimengModulesModule,
    SharedModulesModule,
    SharedComponentsModule,
  ],
})
export class InmueblesModule {}
