import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

/** Modules PrimeNG */
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BadgeModule } from 'primeng/badge';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TreeModule } from 'primeng/tree';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { MenuModule } from 'primeng/menu';
import { MegaMenuModule } from 'primeng/megamenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { StepsModule } from 'primeng/steps';
import { GalleriaModule } from 'primeng/galleria';

const modulePrimeng = [
  InputTextModule,
  ButtonModule,
  TableModule,
  CalendarModule,
  SliderModule,
  DialogModule,
  MultiSelectModule,
  ContextMenuModule,
  ToastModule,
  ProgressBarModule,
  DropdownModule,
  FileUploadModule,
  DynamicDialogModule,
  BadgeModule,
  AccordionModule,
  CheckboxModule,
  RadioButtonModule,
  TreeModule,
  TabViewModule,
  PanelModule,
  DividerModule,
  CardModule,
  MessagesModule,
  MessageModule,
  RatingModule,
  CarouselModule,
  ScrollTopModule,
  ConfirmDialogModule,
  DataViewModule,
  MenuModule,
  MegaMenuModule,
  TabMenuModule,
  InputNumberModule,
  ProgressSpinnerModule,
  BlockUIModule,
  StepsModule,
  GalleriaModule,
];

/** Components Custom */
import { CapModalConfirmacionComponent } from './cap-modal-confirmacion/cap-modal-confirmacion.component';

@NgModule({
  declarations: [CapModalConfirmacionComponent],
  imports: [TranslateModule.forChild({}), CommonModule, FormsModule, ReactiveFormsModule, ...modulePrimeng],
  exports: [CommonModule, ...modulePrimeng, CapModalConfirmacionComponent],
  providers: [MessageService, ConfirmationService],
})
export class SharedPrimengModulesModule {}
