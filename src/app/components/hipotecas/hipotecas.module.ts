import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HipotecasRoutingModule } from './hipotecas-routing.module';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';

import { HipotecasFormComponent } from './pages/hipoteca/hipotecas-form.component';
import { FormHipotecaComponent } from './pages/hipoteca/components/form/form-hipoteca.component';
import { ModalHipotecaComponent } from './pages/hipoteca/components/modal/modal-hipoteca.component';
import { UploadHipotecaComponent } from './pages/hipoteca/components/upload/upload-hipoteca.component';
import { HipotecasMenuComponent } from './shared-components/menu/hipotecas-menu.component';

@NgModule({
  declarations: [HipotecasFormComponent, FormHipotecaComponent, ModalHipotecaComponent, UploadHipotecaComponent, HipotecasMenuComponent],
  imports: [CommonModule, HipotecasRoutingModule, FormsModule, ReactiveFormsModule, SharedModulesModule, SharedPrimengModulesModule],
})
export class HipotecasModule {}
