import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { FooterComponent } from './footer/footer.component';
import { HomeServiciosComponent } from './home-servicios/home-servicios.component';
import { HomeDestacadosComponent } from './home-destacados/home-destacados.component';
import { HomeUbicacionComponent } from './home-ubicacion/home-ubicacion.component';
import { SharedPrimengModulesModule } from '../shared-primeng-modules/shared-primeng-modules.module';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { GaleriaInmuebleComponent } from './galeria/galeria-inmueble.component';
import { DocumentosAvaluoHipotecaComponent } from './documentos/documentos-avaluo-hipoteca.component';

@NgModule({
  declarations: [
    FooterComponent,
    MenuTopComponent,
    HomeServiciosComponent,
    HomeDestacadosComponent,
    HomeUbicacionComponent,
    GaleriaInmuebleComponent,
    DocumentosAvaluoHipotecaComponent,
  ],
  imports: [CommonModule, SharedPrimengModulesModule, SharedModulesModule],
  exports: [
    FooterComponent,
    MenuTopComponent,
    HomeServiciosComponent,
    HomeDestacadosComponent,
    HomeUbicacionComponent,
    GaleriaInmuebleComponent,
    DocumentosAvaluoHipotecaComponent,
  ],
})
export class SharedComponentsModule {}
