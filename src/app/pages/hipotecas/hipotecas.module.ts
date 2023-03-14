import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HipotecasRoutingModule } from './hipotecas-routing.module';
import { HipotecasComponent } from './hipotecas.component';

import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    HipotecasComponent
  ],
  imports: [
    CommonModule,
    HipotecasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    DialogModule
  ]
})
export class HipotecasModule { }
