import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-form-hipoteca',
  templateUrl: './form-hipoteca.component.html',
  styleUrls: ['./form-hipoteca.component.scss'],
})
export class FormHipotecaComponent {
  @Input() formHipotecas: FormGroup = new FormGroup({});
  @Input() loadingButton: boolean = false;
  @Output() actionSaveForm: EventEmitter<any> = new EventEmitter<any>();
  @Input() tiposInmuebles: ParametrosShared[] = [];
  @Input() listaUsoPropiedad: ParametrosShared[] = [];
  @Input() listaEleccionSiNo: ParametrosShared[] = [];
  @Input() listaEstratos: ParametrosShared[] = [];

  constructor() {}

  solicitarHipoteca() {
    this.actionSaveForm.emit();
  }

  get formCtrlH() {
    return this.formHipotecas.controls;
  }

  btnCancel() {
    this.formHipotecas.reset();
  }
}
