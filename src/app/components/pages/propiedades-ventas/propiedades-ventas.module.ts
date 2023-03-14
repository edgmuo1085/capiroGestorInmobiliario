import { PipesModule } from 'src/app/shared/core/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropiedadesVentasRoutingModule } from './propiedades-ventas-routing.module';
import { PropiedadesVentasComponent } from './propiedades-ventas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [PropiedadesVentasComponent],
  imports: [CommonModule, PropiedadesVentasRoutingModule, PipesModule, FormsModule, ReactiveFormsModule, DialogModule],
})
export class PropiedadesVentasModule {}
