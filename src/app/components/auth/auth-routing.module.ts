import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutAuthComponent } from '../layout/pages/layout-auth/layout-auth.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        path: 'login',
        title: '.::Iniciar sesión::.',
        component: LoginComponent,
      },
      {
        path: 'registro',
        title: '.::Registrarse::.',
        component: RegistroComponent,
      },
      {
        path: 'nosotros',
        title: '.::Nosotros::.',
        component: NosotrosComponent,
      },
      {
        path: 'home',
        title: '.::Capiro::.',
        component: HomeComponent,
      },
      {
        path: '',
        title: '.::Capiro::.',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
