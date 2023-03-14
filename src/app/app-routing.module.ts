import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'registro', loadChildren: ()=> import('./pages/registro/registro.module').then( m => m.RegistroModule)},
  {path: 'registroInmueble', canActivate:[AuthGuard], loadChildren: ()=> import('./pages/registro-inmueble/registro-inmueble.module').then( m => m.RegistroInmuebleModule)},
  {path: 'login', loadChildren: ()=> import('./pages/login/login.module').then( m => m.LoginModule)},
  {path: 'contacto', loadChildren: ()=> import('./pages/contacto/contacto.module').then( m => m.ContactoModule)},
  {path: 'propiedades', loadChildren: () => import('./pages/propiedades/propiedades.module').then(m => m.PropiedadesModule)},
  {path: 'detalles/:id', loadChildren: () => import('./pages/detalles/detalles.module').then(m => m.DetallesModule)},
  {path: 'ventas', loadChildren: () => import('./pages/ventas/ventas.module').then(m => m.VentasModule)},
  {path: 'arrendamiento',canActivate:[AuthGuard], loadChildren: () => import('./pages/arrendamientos/arrendamientos.module').then(m => m.ArrendamientosModule)},
  {path: 'propiedadArrendo', loadChildren: () => import('./pages/propiedades-arriendo/propiedades-arriendo.module').then(m => m.PropiedadesArriendoModule)},
  {path: 'propiedadVenta', loadChildren: () => import('./pages/propiedades-ventas/propiedades-ventas.module').then(m => m.PropiedadesVentasModule)},
  {path: 'hipotecas', loadChildren: () => import('./pages/hipotecas/hipotecas.module').then(m => m.HipotecasModule)},
  {path: 'avaluos', loadChildren: () => import('./pages/avaluos/avaluos.module').then(m => m.AvaluosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
