import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrendamientosRoutingModule } from './arrendamientos-routing.module';
import { ArrendamientoComponent } from './pages/arrendamiento/arrendamiento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';
import { ArrendarFormComponent } from './pages/arrendamiento/components/form/arrendar-form.component';
import { InforGeneralArrendarComponent } from './pages/info-general/infor-general-arrendar.component';
import { InforOcupacionArrendarComponent } from './pages/info-ocupacion/infor-ocupacion-arrendar.component';
import { ReferenciasArrendarComponent } from './pages/referencias/referencias-arrendar.component';
import { BienesArrendarComponent } from './pages/bienes/bienes-arrendar.component';
import { MenuArrendarComponent } from './shared-components/menu/menu-arrendar.component';
import { HeaderArrendarComponent } from './shared-components/header/header-arrendar.component';
import { FormGeneralArrendarComponent } from './pages/info-general/components/form/form-general-arrendar.component';
import { FormOcupacionArrendarComponent } from './pages/info-ocupacion/components/form/form-ocupacion-arrendar.component';
import { FormReferenciasArrendarComponent } from './pages/referencias/components/form/form-referencias-arrendar.component';
import { FormBienesArrendarComponent } from './pages/bienes/components/form/form-bienes-arrendar.component';

@NgModule({
  declarations: [
    ArrendamientoComponent,
    ArrendarFormComponent,
    InforGeneralArrendarComponent,
    InforOcupacionArrendarComponent,
    ReferenciasArrendarComponent,
    BienesArrendarComponent,
    MenuArrendarComponent,
    HeaderArrendarComponent,
    FormGeneralArrendarComponent,
    FormOcupacionArrendarComponent,
    FormReferenciasArrendarComponent,
    FormBienesArrendarComponent,
  ],
  imports: [CommonModule, ArrendamientosRoutingModule, FormsModule, ReactiveFormsModule, SharedModulesModule, SharedPrimengModulesModule],
})
export class ArrendamientosModule {}
