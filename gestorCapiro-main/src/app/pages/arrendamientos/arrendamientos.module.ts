import { CdkModule } from './../../cdk.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrendamientosRoutingModule } from './arrendamientos-routing.module';
import { ArrendamientosComponent } from './arrendamientos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ArrendamientosComponent
  ],
  imports: [
    CommonModule,
    ArrendamientosRoutingModule,
    CdkModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArrendamientosModule { }
