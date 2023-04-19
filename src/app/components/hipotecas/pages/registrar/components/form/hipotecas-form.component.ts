import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-hipotecas-form',
  templateUrl: './hipotecas-form.component.html',
  styleUrls: ['./hipotecas-form.component.scss'],
})
export class HipotecasFormComponent {
  @Input() formHipotecas: FormGroup = new FormGroup({});
  @Input() loadingButton: boolean = false;
  @Input() idUsuario: number = 0;
  @Input() idFormulario: number = 0;
  @Input() cargarDocumentos: boolean = false;
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
