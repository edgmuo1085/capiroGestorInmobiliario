import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './pipes/filtro.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { ValidatorDirective } from './directivas/validator.directive';

@NgModule({
  declarations: [FiltroPipe, SafeUrlPipe, ValidatorDirective],
  imports: [CommonModule],
  exports: [FiltroPipe, SafeUrlPipe, ValidatorDirective],
})
export class SharedModulesModule {}
