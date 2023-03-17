import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [FooterComponent, MenuTopComponent],
  imports: [CommonModule],
  exports: [FooterComponent, MenuTopComponent],
})
export class SharedComponentsModule {}
