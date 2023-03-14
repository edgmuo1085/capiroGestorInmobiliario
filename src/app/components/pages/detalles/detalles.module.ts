import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetallesRoutingModule } from './detalles-routing.module';
import { DetallesComponent } from './detalles.component';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [DetallesComponent],
  imports: [CommonModule, DetallesRoutingModule, GalleriaModule],
})
export class DetallesModule {}
