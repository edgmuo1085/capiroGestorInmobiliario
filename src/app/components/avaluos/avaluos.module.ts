import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaluosRoutingModule } from './avaluos-routing.module';

import { DialogModule } from 'primeng/dialog';
import { AvaluosFormComponent } from './pages/avaluo/avaluos-form.component';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';

@NgModule({
  declarations: [AvaluosFormComponent],
  imports: [CommonModule, AvaluosRoutingModule, DialogModule, FormsModule, ReactiveFormsModule, SharedPrimengModulesModule],
})
export class AvaluosModule {}
