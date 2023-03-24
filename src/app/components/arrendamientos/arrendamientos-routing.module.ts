import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from '../layout/pages/layout-auth/layout-auth.component';
import { LayoutPageComponent } from '../layout/pages/layout-page/layout-page.component';
import { AuthGuard } from '../shared/shared-modules/guard/auth.guard';
import { ArrendamientoComponent } from './pages/arrendamiento/arrendamiento.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        title: '.::Arrendamiento::.',
        path: '',
        component: ArrendamientoComponent,
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
        path: '',
        component: ArrendamientoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArrendamientosRoutingModule {}
