import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';

@Component({
  selector: 'app-bienes-arrendar',
  templateUrl: './bienes-arrendar.component.html',
  styleUrls: ['./bienes-arrendar.component.scss'],
})
export class BienesArrendarComponent implements OnInit {
  formBienes: FormGroup = new FormGroup({});
  isLogging: string = '';

  constructor(private fb: FormBuilder, private router: Router, private dataUserService: DataUserService) {
    this.isLogging = this.dataUserService.enableToken() ? '/sesion' : '';
  }

  ngOnInit(): void {
    this.formBienes = this.fb.group({
      tipoInmuebleDireccionUno: ['', [Validators.required]],
      matriculaNumeroUno: ['', [Validators.required]],
      municipioInmuebleUno: ['', [Validators.required]],

      tipoInmuebleDireccionDos: ['', [Validators.required]],
      matriculaNumeroDos: ['', [Validators.required]],
      municipioInmuebleDos: ['', [Validators.required]],

      vehiculoMarcaUno: ['', [Validators.required]],
      vehiculoModeloUno: ['', [Validators.required]],
      vehiculoPlacaUno: ['', [Validators.required]],

      vehiculoMarcaDos: ['', [Validators.required]],
      vehiculoModeloDos: ['', [Validators.required]],
      vehiculoPlacaDos: ['', [Validators.required]],
      observaciones: ['', [Validators.required]],
    });
  }

  guardarFormularioBienes() {
    console.log('formBienes ', this.formBienes.value);
  }

  prevPage() {
    this.router.navigate(['/arrendamiento' + this.isLogging + '/referencias']);
  }

  enviarFormulario() {
    console.log('guardar formulario');
  }
}
