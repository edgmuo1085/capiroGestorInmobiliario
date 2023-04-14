import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';

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
  listaEleccionSiNo: ParametrosShared[] = environment.listaEleccionSiNo;
  listaBanios: ParametrosShared[] = environment.listaBanios;
  tipoConstruccion: ParametrosShared[] = environment.tipoConstruccion;

  constructor(private fb: FormBuilder, private toastCustomService: ToastCustomService, private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.formAvaluos = this.fb.group({
      tipoFormulario: ['avaluo'],
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
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required]],
      /*
      certificadoLibertad: [''],
      escrituraPublica: [''],
      predial: [''],
      certificadoCatastral: [''], */
    });
  }

  onSubmitAvaluo() {
    if (this.formAvaluos.invalid) {
      this.toastCustomService.showToast('Advertencia', 'Debe diligenciar todos los campos', 'error');
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
