import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../layout/pages/layout-page/layout-page.component';
import { AvaluosListaComponent } from './pages/lista/avaluos-lista.component';
import { AvaluosRegistrarComponent } from './pages/registrar/avaluos-registrar.component';

const routes: Routes = [
  {
    path: 'sesion',
    component: LayoutPageComponent,
    children: [
      {
        title: '.::Avalúos::.',
        path: 'registrar',
        component: AvaluosRegistrarComponent,
      },
      {
        title: '.::Listar Avalúos::.',
        path: 'listar',
        component: AvaluosListaComponent,
      },
      {
        title: '.::Avalúos::.',
        path: '',
        component: AvaluosListaComponent,
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
export class AvaluosRoutingModule {}
