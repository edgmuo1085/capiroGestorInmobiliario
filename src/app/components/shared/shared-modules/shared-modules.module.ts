import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './pipes/filtro.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [FiltroPipe, SafeUrlPipe],
  imports: [CommonModule],
  exports: [FiltroPipe, SafeUrlPipe],
})
export class SharedModulesModule {}
