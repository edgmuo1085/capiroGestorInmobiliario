import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-form-general-arrendar',
  templateUrl: './form-general-arrendar.component.html',
  styleUrls: ['./form-general-arrendar.component.scss'],
})
export class FormGeneralArrendarComponent {
  @Input() formInfoGeneral: FormGroup = new FormGroup({});
  @Input() tiposInmuebles: ParametrosShared[] = [];
  @Input() tiposDocumentos: ParametrosShared[] = [];
  @Input() listaSexos: ParametrosShared[] = [];
  @Input() listaNivelEstudio: ParametrosShared[] = [];
  @Input() listadoEstadosCivil: ParametrosShared[] = [];
  @Input() listaOcupacion: ParametrosShared[] = [];
  @Input() tiposCuentasBancos: ParametrosShared[] = [];
  @Output() actionGuardarForm: EventEmitter<any> = new EventEmitter<any>();

  estadoCivilBlock: boolean = false;

  get formCtrlG() {
    return this.formInfoGeneral.controls;
  }

  clicEstadoCivil(event: string) {
    if (event === 'Casado') {
      this.estadoCivilBlock = true;
      return;
    }

    this.estadoCivilBlock = false;
  }

  onSubmitInfoGeneral() {
    this.actionGuardarForm.emit();
  }
}
