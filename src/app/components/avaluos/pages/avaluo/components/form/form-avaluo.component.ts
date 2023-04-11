import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-form-avaluo',
  templateUrl: './form-avaluo.component.html',
  styleUrls: ['./form-avaluo.component.scss'],
})
export class FormAvaluoComponent {
  @Input() formAvaluos: FormGroup = new FormGroup({});
  @Input() loadingButton: boolean = false;
  @Output() actionSaveForm: EventEmitter<any> = new EventEmitter<any>();
  @Input() tiposInmuebles: ParametrosShared[] = [];
  @Input() listaEstratos: ParametrosShared[] = [];
  @Input() listaNiveles: ParametrosShared[] = [];
  @Input() listaHabitaciones: ParametrosShared[] = [];
  @Input() listaBanios: ParametrosShared[] = [];

  constructor() {}

  solicitarAvaluo() {
    this.actionSaveForm.emit();
  }

  get formCtrlAv() {
    return this.formAvaluos.controls;
  }

  btnCancel() {
    this.formAvaluos.reset();
  }
}
