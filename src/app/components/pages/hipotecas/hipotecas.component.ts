import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hipotecas',
  templateUrl: './hipotecas.component.html',
  styleUrls: ['./hipotecas.component.css'],
})
export class HipotecasComponent implements OnInit {
  formHipotecas!: FormGroup;
  display: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formHipotecas = this.fb.group({
      tipoInmueble: ['', Validators.required],
      valor: ['', Validators.required],
      area: ['', Validators.required],
      direccion: ['', Validators.required],
      usoPropiedad: ['', Validators.required],
      afectacion: ['', Validators.required],
      estrato: ['', Validators.required],

      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      celular: ['', Validators.required],
      correo: ['', Validators.required],

      escritura: ['', Validators.required],
      predial: ['', Validators.required],
      cedula: ['', Validators.required],
      certificadoTradicion: ['', Validators.required],
      certificadoCatastral: ['', Validators.required],
    });
  }

  solicitar() {
    if (this.formHipotecas.valid) {
      console.log(this.formHipotecas.value);
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Debe completar todos los campos!',
      });
    }
  }

  showDialog() {
    this.display = true;
  }
}
