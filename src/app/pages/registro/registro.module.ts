import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkModule } from './../../cdk.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    CdkModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistroModule { }
