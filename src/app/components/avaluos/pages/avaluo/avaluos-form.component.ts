import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-avaluos-form',
  templateUrl: './avaluos-form.component.html',
  styleUrls: ['./avaluos-form.component.scss'],
})
export class AvaluosFormComponent implements OnInit {
  mostrarModal: boolean = false;
  loadingButton: boolean = false;
  formAvaluos: FormGroup = new FormGroup({});
  tiposInmuebles: ParametrosShared[] = environment.tiposInmuebles;
  listaEstratos: ParametrosShared[] = environment.listaEstratos;
  listaNiveles: ParametrosShared[] = environment.listaNiveles;
  listaHabitaciones: ParametrosShared[] = environment.listaHabitaciones;
  listaBanios: ParametrosShared[] = environment.listaBanios;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formAvaluos = this.fb.group({
      tipoInmueble: ['', [Validators.required]],
      estrato: ['', [Validators.required]],
      niveles: ['', [Validators.required]],
      habitaciones: ['', [Validators.required]],
      garaje: ['', [Validators.required]],
      banos: ['', [Validators.required]],
      tiempoConstruido: ['', [Validators.required]],
      tipoConstruccion: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required]],
      certificadoLibertad: ['', [Validators.required]],
      escrituraPublica: ['', [Validators.required]],
      predial: ['', [Validators.required]],
      certificadoCatastral: ['', [Validators.required]],
    });
  }

  onSubmitAvaluo() {
    if (this.formAvaluos.invalid) {
      return;
    }

    console.log(this.formAvaluos.value);
  }

  showDialog() {
    this.mostrarModal = true;
  }

  hideDialog(event: boolean) {
    this.mostrarModal = event;
  }
}
