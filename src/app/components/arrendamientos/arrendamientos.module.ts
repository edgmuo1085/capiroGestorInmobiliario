import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrendamientosRoutingModule } from './arrendamientos-routing.module';
import { ArrendamientoComponent } from './pages/arrendamiento/arrendamiento.component';


@NgModule({
  declarations: [
    ArrendamientoComponent
  ],
  imports: [
    CommonModule,
    ArrendamientosRoutingModule
  ]
})
export class ArrendamientosModule { }
