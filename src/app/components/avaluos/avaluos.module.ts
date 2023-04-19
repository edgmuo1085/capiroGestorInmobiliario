import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaluosRoutingModule } from './avaluos-routing.module';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';

import { AvaluosMenuComponent } from './shared-components/menu/avaluos-menu.component';
import { AvaluosListaComponent } from './pages/lista/avaluos-lista.component';
import { AvaluosRegistrarComponent } from './pages/registrar/avaluos-registrar.component';
import { AvaluoFormComponent } from './pages/registrar/components/form/avaluo-form.component';
import { AvaluosModalRequisitosComponent } from './shared-components/modal-requisitos/avaluos-modal-requisitos.component';
import { AvaluosTableComponent } from './pages/lista/components/table/avaluos-table.component';

@NgModule({
  declarations: [
    AvaluosRegistrarComponent,
    AvaluoFormComponent,
    AvaluosModalRequisitosComponent,
    AvaluosMenuComponent,
    AvaluosListaComponent,
    AvaluosTableComponent,
  ],
  imports: [
    CommonModule,
    AvaluosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModulesModule,
    SharedPrimengModulesModule,
    SharedComponentsModule,
  ],
})
export class AvaluosModule {}
