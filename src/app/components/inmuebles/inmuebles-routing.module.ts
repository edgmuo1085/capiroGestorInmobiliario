import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from '../layout/pages/layout-auth/layout-auth.component';
import { LayoutPageComponent } from '../layout/pages/layout-page/layout-page.component';
import { AuthGuard } from '../shared/shared-modules/guard/auth.guard';
import { PropiedadesArriendoComponent } from './pages/propiedades-arriendo/propiedades-arriendo.component';
import { PropiedadesVentaComponent } from './pages/propiedades-venta/propiedades-venta.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        path: 'arriendo',
        component: PropiedadesArriendoComponent,
      },
      {
        path: 'venta',
        component: PropiedadesVentaComponent,
      },
      {
        path: '',
        redirectTo: 'arriendo',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'auth',
    component: LayoutPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'arriendo',
        component: PropiedadesArriendoComponent,
      },
      {
        path: 'venta',
        component: PropiedadesVentaComponent,
      },
      {
        path: '',
        redirectTo: 'arriendo',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmueblesRoutingModule {}
