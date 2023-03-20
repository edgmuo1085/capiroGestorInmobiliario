import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../layout/pages/layout-page/layout-page.component';
import { HipotecasFormComponent } from './pages/hipoteca/hipotecas-form.component';

const routes: Routes = [
  {
    path: 'sesion',
    component: LayoutPageComponent,
    children: [
      {
        title: '.::Hipotecas::.',
        path: 'registrar',
        component: HipotecasFormComponent,
      },
      {
        title: '.::Hipotecas::.',
        path: '',
        component: HipotecasFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HipotecasRoutingModule {}
