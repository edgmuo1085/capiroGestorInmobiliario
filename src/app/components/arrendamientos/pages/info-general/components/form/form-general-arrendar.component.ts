import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
  @Input() estadoCivilBlock: boolean = false;
  @Output() actionGuardarForm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cbf: ChangeDetectorRef) {}

  get formCtrlG() {
    return this.formInfoGeneral.controls;
  }

  clicEstadoCivil(event: string) {
    if (event === 'Casado') {
      this.estadoCivilBlock = true;
      return;
    }

    this.estadoCivilBlock = false;
    this.selectEstadoCivil(event);
  }

  onSubmitInfoGeneral() {
    this.actionGuardarForm.emit();
  }

  selectEstadoCivil(estadoCivil: string) {
    const validatorsRequired: ValidatorFn[] = [Validators.required];
    const validatorsReqEmail: ValidatorFn[] = [Validators.required, Validators.email];
    let ctrlNombresC = this.formInfoGeneral.get('nombresConyuge');
    let ctrlApellidosC = this.formInfoGeneral.get('apellidosConyuge');
    let ctrlTipoDocC = this.formInfoGeneral.get('tipoDocConyuge');
    let ctrlNumeroDocC = this.formInfoGeneral.get('numeroDocConyuge');
    let ctrlCorreoC = this.formInfoGeneral.get('correoConyuge');
    let ctrlCelularC = this.formInfoGeneral.get('celularConyuge');
    let ctrlOcupacionC = this.formInfoGeneral.get('ocupacionConyuge');
    let ctrlIngresosC = this.formInfoGeneral.get('ingresosConyuge');

    if (estadoCivil === 'Casado') {
      ctrlNombresC?.setValidators(validatorsRequired);
      ctrlApellidosC?.setValidators(validatorsRequired);
      ctrlTipoDocC?.setValidators(validatorsRequired);
      ctrlNumeroDocC?.setValidators(validatorsRequired);
      ctrlCorreoC?.setValidators(validatorsReqEmail);
      ctrlCelularC?.setValidators(validatorsRequired);
      ctrlOcupacionC?.setValidators(validatorsRequired);
      ctrlIngresosC?.setValidators(validatorsRequired);
    } else {
      ctrlNombresC?.clearValidators();
      ctrlApellidosC?.clearValidators();
      ctrlTipoDocC?.clearValidators();
      ctrlNumeroDocC?.clearValidators();
      ctrlCorreoC?.clearValidators();
      ctrlCelularC?.clearValidators();
      ctrlOcupacionC?.clearValidators();
      ctrlIngresosC?.clearValidators();
    }
    this.cbf.detectChanges();
  }
}
