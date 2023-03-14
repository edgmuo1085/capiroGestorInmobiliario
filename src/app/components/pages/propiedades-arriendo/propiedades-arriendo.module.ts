import { PipesModule } from 'src/app/shared/core/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropiedadesArriendoRoutingModule } from './propiedades-arriendo-routing.module';
import { PropiedadesArriendoComponent } from './propiedades-arriendo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [PropiedadesArriendoComponent],
  imports: [CommonModule, PropiedadesArriendoRoutingModule, PipesModule, FormsModule, ReactiveFormsModule, DialogModule],
})
export class PropiedadesArriendoModule {}
