import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaluosRoutingModule } from './avaluos-routing.module';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';

import { AvaluosFormComponent } from './pages/avaluo/avaluos-form.component';
import { FormAvaluoComponent } from './pages/avaluo/components/form/form-avaluo.component';
import { ModalAvaluoComponent } from './pages/avaluo/components/modal/modal-avaluo.component';
import { UploadAvaluoComponent } from './pages/avaluo/components/upload/upload-avaluo.component';

@NgModule({
  declarations: [AvaluosFormComponent, FormAvaluoComponent, ModalAvaluoComponent, UploadAvaluoComponent],
  imports: [CommonModule, AvaluosRoutingModule, FormsModule, ReactiveFormsModule, SharedModulesModule, SharedPrimengModulesModule],
})
export class AvaluosModule {}
