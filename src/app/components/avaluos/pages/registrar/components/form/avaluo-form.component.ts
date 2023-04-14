import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-avaluo-form',
  templateUrl: './avaluo-form.component.html',
  styleUrls: ['./avaluo-form.component.scss'],
})
export class AvaluoFormComponent {
  @Input() formAvaluos: FormGroup = new FormGroup({});
  @Input() loadingButton: boolean = false;
  @Output() actionSaveForm: EventEmitter<any> = new EventEmitter<any>();
  @Input() tiposInmuebles: ParametrosShared[] = [];
  @Input() listaEstratos: ParametrosShared[] = [];
  @Input() listaNiveles: ParametrosShared[] = [];
  @Input() listaHabitaciones: ParametrosShared[] = [];
  @Input() listaEleccionSiNo: ParametrosShared[] = [];
  @Input() listaBanios: ParametrosShared[] = [];
  @Input() tipoConstruccion: ParametrosShared[] = [];

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
