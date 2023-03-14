import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropiedadesArriendoComponent } from './propiedades-arriendo.component';

const routes: Routes = [
  {
    path: '',
    component: PropiedadesArriendoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropiedadesArriendoRoutingModule {}
