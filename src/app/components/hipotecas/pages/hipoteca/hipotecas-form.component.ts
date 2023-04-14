import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';

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

  constructor(private fb: FormBuilder, private toastCustomService: ToastCustomService) {}

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
      escritura: ['', [Validators.required]],
      /* 
      predial: [''],
      cedula: [''],
      certificadoLibertad: [''],
      certificadoTradicion: [''],
      certificadoCatastral: [''], */
    });
  }

  onSolicitarHipoteca() {
    if (this.formHipotecas.invalid) {
      this.toastCustomService.showToast('Advertencia', 'Debe diligenciar todos los campos', 'error');
      return;
    }
  }

  showDialog() {
    this.mostrarModal = true;
  }

  hideDialog(event: boolean) {
    this.mostrarModal = event;
  }
}
