import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvaluosRoutingModule } from './avaluos-routing.module';
import { AvaluosComponent } from './avaluos.component';

import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [AvaluosComponent],
  imports: [CommonModule, AvaluosRoutingModule, DialogModule, FormsModule, ReactiveFormsModule],
})
export class AvaluosModule {}
