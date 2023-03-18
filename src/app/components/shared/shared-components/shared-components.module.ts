import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { FooterComponent } from './footer/footer.component';
import { HomeServiciosComponent } from './home-servicios/home-servicios.component';

@NgModule({
  declarations: [FooterComponent, MenuTopComponent, HomeServiciosComponent],
  imports: [CommonModule],
  exports: [FooterComponent, MenuTopComponent, HomeServiciosComponent],
})
export class SharedComponentsModule {}
