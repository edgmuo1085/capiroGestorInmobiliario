import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';

@NgModule({
  declarations: [LoginComponent, RegistroComponent, HomeComponent, NosotrosComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, ReactiveFormsModule, SharedComponentsModule, SharedPrimengModulesModule],
})
export class AuthModule {}
