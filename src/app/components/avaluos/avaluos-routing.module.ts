import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from '../layout/pages/layout-page/layout-page.component';
import { AvaluosFormComponent } from './pages/avaluo/avaluos-form.component';

const routes: Routes = [
  {
    path: 'sesion',
    component: LayoutPageComponent,
    children: [
      {
        title: '.::Avalúos::.',
        path: 'registrar',
        component: AvaluosFormComponent,
      },
      {
        title: '.::Avalúos::.',
        path: '',
        component: AvaluosFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvaluosRoutingModule {}
