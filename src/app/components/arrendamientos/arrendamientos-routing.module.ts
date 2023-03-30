import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from '../layout/pages/layout-auth/layout-auth.component';
import { LayoutPageComponent } from '../layout/pages/layout-page/layout-page.component';
import { AuthGuard } from '../shared/shared-modules/guard/auth.guard';
import { BienesArrendarComponent } from './pages/bienes/bienes-arrendar.component';
import { InforGeneralArrendarComponent } from './pages/info-general/infor-general-arrendar.component';
import { InforOcupacionArrendarComponent } from './pages/info-ocupacion/infor-ocupacion-arrendar.component';
import { ReferenciasArrendarComponent } from './pages/referencias/referencias-arrendar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        title: '.::Arrendamiento::.',
        path: 'informacion-general',
        component: InforGeneralArrendarComponent,
      },
      {
        title: '.::Arrendamiento::.',
        path: 'informacion-ocupacion',
        component: InforOcupacionArrendarComponent,
      },
      {
        title: '.::Arrendamiento::.',
        path: 'referencias',
        component: ReferenciasArrendarComponent,
      },
      {
        title: '.::Arrendamiento::.',
        path: 'bienes',
        component: BienesArrendarComponent,
      },
    ],
  },
  {
    path: 'sesion',
    component: LayoutPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        title: '.::Arrendamiento::.',
        path: 'informacion-general',
        component: InforGeneralArrendarComponent,
      },
      {
        title: '.::Arrendamiento::.',
        path: 'informacion-ocupacion',
        component: InforOcupacionArrendarComponent,
      },
      {
        title: '.::Arrendamiento::.',
        path: 'referencias',
        component: ReferenciasArrendarComponent,
      },
      {
        title: '.::Arrendamiento::.',
        path: 'bienes',
        component: BienesArrendarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrendamientosRoutingModule {}
