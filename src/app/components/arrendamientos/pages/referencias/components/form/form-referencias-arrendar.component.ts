import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-form-referencias-arrendar',
  templateUrl: './form-referencias-arrendar.component.html',
  styleUrls: ['./form-referencias-arrendar.component.scss'],
})
export class FormReferenciasArrendarComponent {
  @Input() formReferencias: FormGroup = new FormGroup({});
  @Input() tiposCuentasBancos: ParametrosShared[] = [];
  @Output() actionGuardarForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionPrevPage: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  onSubmitReferencias() {
    this.actionGuardarForm.emit();
  }

  btnAtras() {
    this.actionPrevPage.emit();
  }
}
