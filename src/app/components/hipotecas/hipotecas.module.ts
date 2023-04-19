import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HipotecasRoutingModule } from './hipotecas-routing.module';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';

import { HipotecasMenuComponent } from './shared-components/menu/hipotecas-menu.component';
import { HipotecasListaComponent } from './pages/lista/hipotecas-lista.component';
import { HipotecasRegistrarComponent } from './pages/registrar/hipotecas-registrar.component';
import { HipotecasFormComponent } from './pages/registrar/components/form/hipotecas-form.component';
import { HipotecasTableComponent } from './pages/lista/components/table/hipotecas-table.component';
import { HipotecasModalRequisitosComponent } from './shared-components/modal-requisitos/hipotecas-modal-requisitos.component';

@NgModule({
  declarations: [
    HipotecasMenuComponent,
    HipotecasListaComponent,
    HipotecasRegistrarComponent,
    HipotecasFormComponent,
    HipotecasTableComponent,
    HipotecasModalRequisitosComponent,
  ],
  imports: [
    CommonModule,
    HipotecasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModulesModule,
    SharedPrimengModulesModule,
    SharedComponentsModule,
  ],
})
export class HipotecasModule {}
