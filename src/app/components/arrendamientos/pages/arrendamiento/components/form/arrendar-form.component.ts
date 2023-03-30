import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-arrendar-form',
  templateUrl: './arrendar-form.component.html',
  styleUrls: ['./arrendar-form.component.scss'],
})
export class ArrendarFormComponent {
  @Input() formArrendamientos: FormGroup = new FormGroup({});
  @Input() seccionInformacionGeneral: boolean = true;
  @Input() seccionOcupacion: boolean = false;
  @Input() seccionReferencias: boolean = false;
  @Input() seccionBienes: boolean = false;
  @Input() tiposInmuebles: ParametrosShared[] = [];
  @Input() tiposDocumentos: ParametrosShared[] = [];
  @Input() listaSexos: ParametrosShared[] = [];
  @Input() listaNivelEstudio: ParametrosShared[] = [];
  @Input() listadoEstadosCivil: ParametrosShared[] = [];
  @Input() listaOcupacion: ParametrosShared[] = [];
  @Input() tiposCuentasBancos: ParametrosShared[] = [];
  @Output() actionGuardarForm: EventEmitter<any> = new EventEmitter<any>();

  empleado: boolean = false;
  independiente: boolean = false;
  pensionado: boolean = false;
  estadoCivil: boolean = false;

  constructor() {}

  get formCtrlA() {
    return this.formArrendamientos.controls;
  }

  clicOcupacion(event: string) {
    console.log(event);

    if (event === 'Empleado') {
      this.empleado = true;
      this.independiente = false;
      this.pensionado = false;
    } else if (event === 'Independiente') {
      this.independiente = true;
      this.empleado = false;
      this.pensionado = false;
    } else if (event === 'Pensionado') {
      this.pensionado = true;
      this.empleado = false;
      this.independiente = false;
    } else {
      this.empleado = false;
      this.independiente = false;
      this.pensionado = false;
    }
  }

  clicEstadoCivil(event: string) {
    if (event === 'Casado') {
      this.estadoCivil = true;
      return;
    }

    this.estadoCivil = false;
  }

  onSubmitRegistrarArrandar() {
    this.actionGuardarForm.emit();
  }
}