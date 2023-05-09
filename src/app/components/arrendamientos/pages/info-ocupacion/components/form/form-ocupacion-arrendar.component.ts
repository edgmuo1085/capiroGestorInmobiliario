import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form-ocupacion-arrendar',
  templateUrl: './form-ocupacion-arrendar.component.html',
  styleUrls: ['./form-ocupacion-arrendar.component.scss'],
})
export class FormOcupacionArrendarComponent implements OnChanges {
  @Input() formInfoOcupacion: FormGroup = new FormGroup({});
  @Input() listaOcupacion: ParametrosShared[] = [];
  @Input() opcionSelect: string = '';
  @Output() actionGuardarForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionPrevPage: EventEmitter<any> = new EventEmitter<any>();

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

  constructor(private cbf: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('opcionSelect')) {
      this.clicOcupacion(this.opcionSelect, false);
    }
  }

  get formCtrlO() {
    return this.formInfoOcupacion.controls;
  }

  clicOcupacion(event: string, clearForm: boolean = true) {
    this.showCtrlForm = this.getShowControlForm(event);
    this.validacionRequiredForm(event, clearForm);
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

  validacionRequiredForm(tipoOcupacion: string, clearForm: boolean) {
    const validatorsRequired: ValidatorFn[] = [Validators.required];
    const validatorsRequiredNumber: ValidatorFn[] = [Validators.required, Validators.pattern(environment.soloNumeros)];

    let ctrlEmpresa = this.formInfoOcupacion.get('empresa');
    let ctrlNitEmpresa = this.formInfoOcupacion.get('nitEmpresa');
    let ctrlDireccionOcupacion = this.formInfoOcupacion.get('direccionOcupacion');
    let ctrlCiudadOcupacion = this.formInfoOcupacion.get('ciudadOcupacion');
    let ctrlFechaIngreso = this.formInfoOcupacion.get('fechaIngreso');
    let ctrlCargoOcupacion = this.formInfoOcupacion.get('cargoOcupacion');
    let ctrlTipoContrato = this.formInfoOcupacion.get('tipoContrato');
    let ctrlTelefonoEmpresa = this.formInfoOcupacion.get('telefonoEmpresa');
    let ctrlSalario = this.formInfoOcupacion.get('salario');
    let ctrlOtroIngreso = this.formInfoOcupacion.get('otroIngreso');
    let ctrlOrigenOtrosIngresos = this.formInfoOcupacion.get('origenOtrosIngresos');
    let ctrlEgresosMensuales = this.formInfoOcupacion.get('egresosMensuales');
    let ctrlActividadProfesional = this.formInfoOcupacion.get('actividadProfesional');
    let ctrlContacto = this.formInfoOcupacion.get('contacto');
    let ctrlOtroIngresoOrigen = this.formInfoOcupacion.get('otroIngresoOrigen');
    let ctrlEmpresaPensionado = this.formInfoOcupacion.get('empresaPensionado');
    let ctrlIngresoMensualPension = this.formInfoOcupacion.get('ingresoMensualPension');
    let ctrlDeduccionMensual = this.formInfoOcupacion.get('deduccionMensual');

    if (clearForm) {
      ctrlEmpresa?.setValue('');
      ctrlNitEmpresa?.setValue('');
      ctrlDireccionOcupacion?.setValue('');
      ctrlCiudadOcupacion?.setValue('');
      ctrlFechaIngreso?.setValue('');
      ctrlCargoOcupacion?.setValue('');
      ctrlTipoContrato?.setValue('');
      ctrlTelefonoEmpresa?.setValue('');
      ctrlSalario?.setValue('');
      ctrlOtroIngreso?.setValue('');
      ctrlOrigenOtrosIngresos?.setValue('');
      ctrlEgresosMensuales?.setValue('');
      ctrlActividadProfesional?.setValue('');
      ctrlContacto?.setValue('');
      ctrlOtroIngresoOrigen?.setValue('');
      ctrlEmpresaPensionado?.setValue('');
      ctrlIngresoMensualPension?.setValue('');
      ctrlDeduccionMensual?.setValue('');

      ctrlEmpresa?.setErrors(null);
      ctrlNitEmpresa?.setErrors(null);
      ctrlDireccionOcupacion?.setErrors(null);
      ctrlCiudadOcupacion?.setErrors(null);
      ctrlFechaIngreso?.setErrors(null);
      ctrlCargoOcupacion?.setErrors(null);
      ctrlTipoContrato?.setErrors(null);
      ctrlTelefonoEmpresa?.setErrors(null);
      ctrlSalario?.setErrors(null);
      ctrlOtroIngreso?.setErrors(null);
      ctrlOrigenOtrosIngresos?.setErrors(null);
      ctrlEgresosMensuales?.setErrors(null);
      ctrlActividadProfesional?.setErrors(null);
      ctrlContacto?.setErrors(null);
      ctrlOtroIngresoOrigen?.setErrors(null);
      ctrlEmpresaPensionado?.setErrors(null);
      ctrlIngresoMensualPension?.setErrors(null);
      ctrlDeduccionMensual?.setErrors(null);
    }

    if (tipoOcupacion === 'Empleado') {
      ctrlEmpresa?.setValidators(validatorsRequired);
      ctrlNitEmpresa?.setValidators(validatorsRequired);
      ctrlDireccionOcupacion?.setValidators(validatorsRequired);
      ctrlCiudadOcupacion?.setValidators(validatorsRequired);
      ctrlFechaIngreso?.setValidators(validatorsRequired);
      ctrlCargoOcupacion?.setValidators(validatorsRequired);
      ctrlTipoContrato?.setValidators(validatorsRequired);
      ctrlTelefonoEmpresa?.setValidators(validatorsRequiredNumber);
      ctrlSalario?.setValidators(validatorsRequiredNumber);
      ctrlOtroIngreso?.setValidators(validatorsRequiredNumber);
      ctrlOrigenOtrosIngresos?.setValidators(validatorsRequired);
      ctrlEgresosMensuales?.setValidators(validatorsRequiredNumber);
      ctrlActividadProfesional?.clearValidators();
      ctrlContacto?.clearValidators();
      ctrlOtroIngresoOrigen?.clearValidators();
      ctrlEmpresaPensionado?.clearValidators();
      ctrlIngresoMensualPension?.clearValidators();
      ctrlDeduccionMensual?.clearValidators();
      this.cbf.detectChanges();
      return;
    }

    if (tipoOcupacion === 'Independiente') {
      ctrlDireccionOcupacion?.setValidators(validatorsRequired);
      ctrlCiudadOcupacion?.setValidators(validatorsRequired);
      ctrlCargoOcupacion?.setValidators(validatorsRequired);
      ctrlSalario?.setValidators(validatorsRequiredNumber);
      ctrlEgresosMensuales?.setValidators(validatorsRequiredNumber);
      ctrlActividadProfesional?.setValidators(validatorsRequired);
      ctrlContacto?.setValidators(validatorsRequired);
      ctrlOtroIngresoOrigen?.setValidators(validatorsRequired);
      ctrlEmpresa?.clearValidators();
      ctrlNitEmpresa?.clearValidators();
      ctrlFechaIngreso?.clearValidators();
      ctrlTipoContrato?.clearValidators();
      ctrlTelefonoEmpresa?.clearValidators();
      ctrlOtroIngreso?.clearValidators();
      ctrlOrigenOtrosIngresos?.clearValidators();
      ctrlEmpresaPensionado?.clearValidators();
      ctrlIngresoMensualPension?.clearValidators();
      ctrlDeduccionMensual?.clearValidators();
      this.cbf.detectChanges();
      return;
    }

    ctrlContacto?.setValidators(validatorsRequired);
    ctrlEmpresaPensionado?.setValidators(validatorsRequired);
    ctrlIngresoMensualPension?.setValidators(validatorsRequired);
    ctrlDeduccionMensual?.setValidators(validatorsRequired);
    ctrlEmpresa?.clearValidators();
    ctrlNitEmpresa?.clearValidators();
    ctrlDireccionOcupacion?.clearValidators();
    ctrlCiudadOcupacion?.clearValidators();
    ctrlFechaIngreso?.clearValidators();
    ctrlCargoOcupacion?.clearValidators();
    ctrlTipoContrato?.clearValidators();
    ctrlTelefonoEmpresa?.clearValidators();
    ctrlSalario?.clearValidators();
    ctrlOtroIngreso?.clearValidators();
    ctrlOrigenOtrosIngresos?.clearValidators();
    ctrlEgresosMensuales?.clearValidators();
    ctrlActividadProfesional?.clearValidators();
    ctrlOtroIngresoOrigen?.clearValidators();
    this.cbf.detectChanges();
  }

  onSubmitInfoOcupacion() {
    this.actionGuardarForm.emit();
  }

  btnAtras() {
    this.actionPrevPage.emit();
  }
}
