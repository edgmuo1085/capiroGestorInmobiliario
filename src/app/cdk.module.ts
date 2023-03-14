import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { DialogModule } from '@angular/cdk/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { DropdownModule } from 'primeng/dropdown';

import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [CommonModule, CdkAccordionModule, DialogModule, MatStepperModule, DropdownModule, ToastModule],
  exports: [CdkAccordionModule, DialogModule, MatStepperModule, DropdownModule, ToastModule],
})
export class CdkModule {}
