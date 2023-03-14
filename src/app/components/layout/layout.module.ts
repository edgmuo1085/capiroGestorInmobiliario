import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutMainComponent } from './pages/layout-main/layout-main.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutAuthComponent } from './pages/layout-auth/layout-auth.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { Page404Component } from './pages/page404/page404.component';
import { NavbarComponent } from './pages/layout-auth/components/navbar/navbar.component';
import { FooterComponent } from './pages/layout-auth/components/footer/footer.component';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';

@NgModule({
  declarations: [
    LayoutMainComponent,
    DashboardComponent,
    LayoutAuthComponent,
    LayoutPageComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, SharedPrimengModulesModule],
})
export class LayoutModule {}
