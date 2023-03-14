import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './components/layout/pages/layout-main/layout-main.component';
import { Page404Component } from './components/layout/pages/page404/page404.component';
import { AuthGuard } from './components/shared/shared-modules/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'page',
        loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule),
      },
      /* {
        path: 'lease',
        loadChildren: () => import('./components/lease/lease.module').then(m => m.LeaseModule),
      },
      {
        path: 'buy',
        loadChildren: () => import('./components/buy/buy.module').then(m => m.BuyModule),
      },
      {
        path: 'cities',
        loadChildren: () => import('./components/cities/cities.module').then(m => m.CitiesModule),
      },
      {
        path: 'owners',
        loadChildren: () => import('./components/owners/owners.module').then(m => m.OwnersModule),
      },
      {
        path: 'building',
        loadChildren: () => import('./components/building/building.module').then(m => m.BuildingModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'user',
        loadChildren: () => import('./components/user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard],
      }, */
      {
        path: '',
        redirectTo: 'page',
        pathMatch: 'full',
      },
      {
        path: '',
        loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule),
        canActivate: [AuthGuard],
      },
      {
        path: '**',
        title: '.::Página no encontrada::.',
        component: Page404Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
