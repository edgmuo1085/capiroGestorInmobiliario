import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
import { AvaluoModel, ResponseAvaluo } from 'src/app/components/interfaces/response-avaluo-hipoteca.interface';

@Component({
  selector: 'app-avaluos-registrar',
  templateUrl: './avaluos-registrar.component.html',
  styleUrls: ['./avaluos-registrar.component.scss'],
})
export class AvaluosRegistrarComponent implements OnInit {
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
    });
  }

  onSubmitAvaluo() {
    if (this.formAvaluos.invalid) {
      this.toastCustomService.showToast('Advertencia', 'Debe diligenciar todos los campos', 'error');
      return;
    }

    let registroAvaluo: ResponseAvaluo = new AvaluoModel(
      this.formAvaluos.get('tipoFormulario')?.value,
      this.formAvaluos.get('tipoInmueble')?.value,
      this.formAvaluos.get('estrato')?.value,
      this.formAvaluos.get('niveles')?.value,
      this.formAvaluos.get('habitaciones')?.value,
      this.formAvaluos.get('garaje')?.value,
      this.formAvaluos.get('banos')?.value,
      this.formAvaluos.get('tiempoConstruido')?.value,
      this.formAvaluos.get('tipoConstruccion')?.value,
      this.formAvaluos.get('ubicacion')?.value,
      this.formAvaluos.get('direccion')?.value,
      this.formAvaluos.get('nombre')?.value,
      this.formAvaluos.get('apellido')?.value,
      this.formAvaluos.get('correo')?.value,
      this.formAvaluos.get('celular')?.value
    );

    this.propiedadesService.crearAvaluo(registroAvaluo).subscribe({
      next: response => {
        if (!response.id) {
          this.toastCustomService.showToast(
            'Advertencia',
            'Ocurrió un error al momento de registrar el avalúo, inténtelo más tarde',
            'warn'
          );
          return;
        }
        this.toastCustomService.showToast('Información', 'Avalúo registrado con éxito. Puede continuar anexando los documentos.');
        this.formAvaluos.reset();
      },
      error: err => {
        console.error(err);
      },
    });
  }
}
