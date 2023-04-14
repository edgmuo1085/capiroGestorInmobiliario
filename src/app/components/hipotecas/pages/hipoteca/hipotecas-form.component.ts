import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';
import { HipotecaModel, ResponseHipeteca } from 'src/app/components/interfaces/response-avaluo-hipoteca.interface';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';

@Component({
  selector: 'app-hipotecas-form',
  templateUrl: './hipotecas-form.component.html',
  styleUrls: ['./hipotecas-form.component.scss'],
})
export class HipotecasFormComponent implements OnInit {
  mostrarModal: boolean = false;
  loadingButton: boolean = false;
  formAvaluos: FormGroup = new FormGroup({});
  tiposInmuebles: ParametrosShared[] = environment.tiposInmuebles;
  listaUsoPropiedad: ParametrosShared[] = environment.listaUsoPropiedad;
  listaEleccionSiNo: ParametrosShared[] = environment.listaEleccionSiNo;
  listaEstratos: ParametrosShared[] = environment.listaEstratos;
  formHipotecas: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private toastCustomService: ToastCustomService, private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.formHipotecas = this.fb.group({
      tipoFormulario: ['hipoteca'],
      tipoInmueble: ['', [Validators.required]],
      estrato: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required]],
      valor: ['', [Validators.required, Validators.maxLength(15), Validators.pattern(environment.soloNumeros)]],
      area: ['', [Validators.required, Validators.maxLength(8), Validators.pattern(environment.soloNumeros)]],
      usoPropiedad: ['', [Validators.required]],
      afectacion: ['', [Validators.required]],
    });
  }

  onSubmitHipoteca() {
    if (this.formHipotecas.invalid) {
      this.toastCustomService.showToast('Advertencia', 'Debe diligenciar todos los campos', 'error');
      return;
    }

    let registroHipoteca: ResponseHipeteca = new HipotecaModel(
      this.formHipotecas.get('tipoFormulario')?.value,
      this.formHipotecas.get('tipoInmueble')?.value,
      this.formHipotecas.get('estrato')?.value,
      this.formHipotecas.get('direccion')?.value,
      this.formHipotecas.get('nombre')?.value,
      this.formHipotecas.get('apellido')?.value,
      this.formHipotecas.get('correo')?.value,
      this.formHipotecas.get('celular')?.value,
      this.formHipotecas.get('valor')?.value,
      this.formHipotecas.get('area')?.value,
      this.formHipotecas.get('usoPropiedad')?.value,
      this.formHipotecas.get('afectacion')?.value
    );

    this.propiedadesService.crearHipoteca(registroHipoteca).subscribe({
      next: response => {
        if (!response.id) {
          this.toastCustomService.showToast(
            'Advertencia',
            'Ocurrió un error al momento de registrar la hipoteca, inténtelo más tarde',
            'warn'
          );
          return;
        }
        this.toastCustomService.showToast('Información', 'Hipoteca registrada con éxito. Puede continuar anexando los documentos.');
        this.formAvaluos.reset();
      },
      error: err => {
        console.error(err);
      },
    });
  }

  showDialog() {
    this.mostrarModal = true;
  }

  hideDialog(event: boolean) {
    this.mostrarModal = event;
  }
}
