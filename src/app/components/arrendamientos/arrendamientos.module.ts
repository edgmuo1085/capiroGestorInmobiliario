import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrendamientosRoutingModule } from './arrendamientos-routing.module';
import { ArrendamientoComponent } from './pages/arrendamiento/arrendamiento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';
import { ArrendarFormComponent } from './pages/arrendamiento/components/form/arrendar-form.component';

@NgModule({
  declarations: [ArrendamientoComponent, ArrendarFormComponent],
  imports: [CommonModule, ArrendamientosRoutingModule, FormsModule, ReactiveFormsModule, SharedModulesModule, SharedPrimengModulesModule],
})
export class ArrendamientosModule {}
