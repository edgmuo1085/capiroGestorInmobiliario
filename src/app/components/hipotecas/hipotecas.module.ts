import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HipotecasRoutingModule } from './hipotecas-routing.module';

import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { HipotecasFormComponent } from './pages/hipoteca/hipotecas-form.component';

@NgModule({
  declarations: [HipotecasFormComponent],
  imports: [CommonModule, HipotecasRoutingModule, FormsModule, ReactiveFormsModule, FileUploadModule, DialogModule],
})
export class HipotecasModule {}
