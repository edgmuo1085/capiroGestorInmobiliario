import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropiedadesRoutingModule } from './propiedades-routing.module';
import { PropiedadesComponent } from './propiedades.component';
import { PipesModule } from 'src/app/shared/core/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PropiedadesComponent],
  imports: [CommonModule, PropiedadesRoutingModule, PipesModule, FormsModule, ReactiveFormsModule, PipesModule],
})
export class PropiedadesModule {}
