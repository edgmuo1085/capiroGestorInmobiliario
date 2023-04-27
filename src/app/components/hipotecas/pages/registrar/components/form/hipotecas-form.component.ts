import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hipotecas-form',
  templateUrl: './hipotecas-form.component.html',
  styleUrls: ['./hipotecas-form.component.scss'],
})
export class HipotecasFormComponent {
  @Input() formHipotecas: FormGroup = new FormGroup({});
  @Input() loadingButton: boolean = false;
  @Input() idUsuario: number = 0;
  @Input() idAvaluo: number = 0;
  @Input() cargarDocumentos: boolean = false;
  @Output() actionSaveForm: EventEmitter<any> = new EventEmitter<any>();
  @Input() tiposInmuebles: ParametrosShared[] = [];
  @Input() listaUsoPropiedad: ParametrosShared[] = [];
  @Input() listaEleccionSiNo: ParametrosShared[] = [];
  @Input() listaEstratos: ParametrosShared[] = [];

  nombresHipotecaDocumentos: string[] = environment.nombresHipotecaDocumentos;

  constructor() {}

  solicitarHipoteca() {
    this.actionSaveForm.emit();
  }

  btnCancel() {
    this.formHipotecas.reset();
  }
}
