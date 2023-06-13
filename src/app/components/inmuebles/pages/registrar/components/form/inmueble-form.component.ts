import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { Router } from '@angular/router';

import { DepartamentoService } from 'src/app/components/shared/shared-services/departametos.service';

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
  @Input() listaHabitaciones: ParametrosShared[] = [];
  @Input() listaEstratos: ParametrosShared[] = [];
  @Input() listaBanios: ParametrosShared[] = [];
  @Input() listaEleccionSiNo: ParametrosShared[] = [];
  @Input() estadoInmueble: ParametrosShared[] = [];
  @Input() tipoPublicacion: ParametrosShared[] = [];
  @Input() tipoConstruccion: ParametrosShared[] = [];
  @Input() listaDepartamentos: ParametrosShared[]= [];
  @Input() listaCocinas: ParametrosShared[]= [];
  @Input() listaCloseth: ParametrosShared[]= [];
  @Input() listaNegociado: ParametrosShared[]= [];
  departamentoSeleccionado:string='';
  @Input() ciudades: String[] = [];
  @Output() actionFormInmueble: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router,private depar: DepartamentoService) {}
  onChangeDepartamento(event: any) {
    this.departamentoSeleccionado = event.target.value;
    this.depart(this.departamentoSeleccionado);
  }
  depart(nombre: string) {
    this.depar.depar(nombre).subscribe((response: string[]) => {
      this.ciudades=response;
    });
  }
  onSubmitFormInmueble() {
    this.actionFormInmueble.emit();
  }

  btnCancel() {
    if (this.actualizarInmueble) {
      this.router.navigate(['/inmuebles/sesion/listar']);
      return;
    }
    this.formRegistroInmueble.reset();
  }
}
