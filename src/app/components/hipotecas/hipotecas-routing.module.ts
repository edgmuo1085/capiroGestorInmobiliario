import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../layout/pages/layout-page/layout-page.component';
import { HipotecasListaComponent } from './pages/lista/hipotecas-lista.component';
import { HipotecasRegistrarComponent } from './pages/registrar/hipotecas-registrar.component';

const routes: Routes = [
  {
    path: 'sesion',
    component: LayoutPageComponent,
    children: [
      {
        title: '.::Hipotecas::.',
        path: 'registrar',
        component: HipotecasRegistrarComponent,
      },
      {
        title: '.::Listar Hipotecas::.',
        path: 'listar',
        component: HipotecasListaComponent,
      },
      {
        title: '.::Hipotecas::.',
        path: '',
        component: HipotecasListaComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'sesion',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HipotecasRoutingModule {}
