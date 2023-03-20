import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from '../layout/pages/layout-auth/layout-auth.component';
import { LayoutPageComponent } from '../layout/pages/layout-page/layout-page.component';
import { AuthGuard } from '../shared/shared-modules/guard/auth.guard';
import { InmuebleDetalleComponent } from './pages/detalle/inmueble-detalle.component';
import { PropiedadesArriendoComponent } from './pages/propiedades-arriendo/propiedades-arriendo.component';
import { PropiedadesVentaComponent } from './pages/propiedades-venta/propiedades-venta.component';
import { InmuebleRegistrarComponent } from './pages/registrar/inmueble-registrar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        title: '.::Arrendar Inmueble::.',
        path: 'arriendo',
        component: PropiedadesArriendoComponent,
      },
      {
        title: '.::Vender Inmueble::.',
        path: 'venta',
        component: PropiedadesVentaComponent,
      },
      {
        title: '.::Ver Inmueble::.',
        path: 'detalle/:inmueble',
        component: InmuebleDetalleComponent,
      },
      {
        path: '',
        redirectTo: 'venta',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'sesion',
    component: LayoutPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        title: '.::Arrendar Inmueble::.',
        path: 'arriendo',
        component: PropiedadesArriendoComponent,
      },
      {
        title: '.::Vender Inmueble::.',
        path: 'venta',
        component: PropiedadesVentaComponent,
      },
      {
        title: '.::Registrar Inmueble::.',
        path: 'registrar',
        component: InmuebleRegistrarComponent,
      },
      {
        title: '.::Ver Inmueble::.',
        path: 'detalle/:inmueble',
        component: InmuebleDetalleComponent,
      },
      {
        path: '',
        redirectTo: 'venta',
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
