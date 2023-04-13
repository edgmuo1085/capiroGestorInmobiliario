import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formHipotecas = this.fb.group({
      tipoInmueble: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      area: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      usoPropiedad: ['', [Validators.required]],
      afectacion: ['', [Validators.required]],
      estrato: ['', [Validators.required]],

      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required]],

      escritura: ['', [Validators.required]],
      predial: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      certificadoLibertad: ['', [Validators.required]],
      certificadoTradicion: ['', [Validators.required]],
      certificadoCatastral: ['', [Validators.required]],
    });
  }

  onSolicitarHipoteca() {
    console.log(this.formHipotecas.value);
    if (this.formHipotecas.valid) {
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Debe completar todos los campos!',
      });
    }
  }

  showDialog() {
    this.mostrarModal = true;
  }

  hideDialog(event: boolean) {
    this.mostrarModal = event;
  }
}
