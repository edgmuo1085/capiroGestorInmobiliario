import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-form-ocupacion-arrendar',
  templateUrl: './form-ocupacion-arrendar.component.html',
  styleUrls: ['./form-ocupacion-arrendar.component.scss'],
})
export class FormOcupacionArrendarComponent {
  @Input() formInfoOcupacion: FormGroup = new FormGroup({});
  @Input() listaOcupacion: ParametrosShared[] = [];
  @Output() actionGuardarForm: EventEmitter<any> = new EventEmitter<any>();

  showCtrlForm: boolean[] = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  get formCtrlO() {
    return this.formInfoOcupacion.controls;
  }

  clicOcupacion(event: string) {
    this.showCtrlForm = this.getShowControlForm(event);
  }

  getShowControlForm(tipoOcupacion: string): boolean[] {
    let allControls = [true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false];
    const TIPO_OCUPACION_SHOW_CTRL: any = {
      Empleado: [true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false],
      Independiente: [false, false, true, true, false, true, false, false, true, false, false, true, true, true, true, false, false, false],
      Pensionado: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        true,
        true,
      ],
    };

    return TIPO_OCUPACION_SHOW_CTRL[tipoOcupacion] || allControls;
  }

  onSubmitInfoOcupacion() {
    this.actionGuardarForm.emit();
  }
}
