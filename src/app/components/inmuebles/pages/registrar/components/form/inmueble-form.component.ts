import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inmueble-form',
  templateUrl: './inmueble-form.component.html',
  styleUrls: ['./inmueble-form.component.scss'],
})
export class InmuebleFormComponent {
  @Input() cargarImagenes: boolean = false;
  @Input() formRegistroInmueble: FormGroup = new FormGroup({});
  @Input() idUsuario: number = 0;
  @Input() idInmueble: number = 0;
  @Input() loading: boolean = false;
  @Input() actualizarInmueble = false;
  @Input() msgTituloPage: string = '';
  @Input() tiposInmuebles: ParametrosShared[] = [];
  @Input() listaEstratos: ParametrosShared[] = [];
  @Input() garageSeleccion: ParametrosShared[] = [];
  @Input() estadoInmueble: ParametrosShared[] = [];
  @Input() tipoPublicacion: ParametrosShared[] = [];
  @Input() tipoConstruccion: ParametrosShared[] = [];
  @Output() actionFormInmueble: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  onSubmitFormInmueble() {
    this.actionFormInmueble.emit();
  }

  get formCtrlI() {
    return this.formRegistroInmueble.controls;
  }

  btnCancel() {
    if (this.actualizarInmueble) {
      this.router.navigate(['/inmuebles/sesion/listar']);
      return;
    }
    this.formRegistroInmueble.reset();
  }
}
