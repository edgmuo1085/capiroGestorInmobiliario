import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-avaluo-form',
  templateUrl: './avaluo-form.component.html',
  styleUrls: ['./avaluo-form.component.scss'],
})
export class AvaluoFormComponent {
  @Input() idUsuario: number = 0;
  @Input() idAvaluo: number = 0;
  @Input() cargarDocumentos: boolean = false;
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

  nombresAvaluoDocumentos: string[] = environment.nombresAvaluoDocumentos;

  constructor() {}

  solicitarAvaluo() {
    this.actionSaveForm.emit();
  }

  btnCancel() {
    this.formAvaluos.reset();
  }
}
