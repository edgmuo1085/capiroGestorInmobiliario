import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HipotecasComponent } from './hipotecas.component';

const routes: Routes = [
  {
    path: '',
    component: HipotecasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HipotecasRoutingModule { }
