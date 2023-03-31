import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-infor-ocupacion-arrendar',
  templateUrl: './infor-ocupacion-arrendar.component.html',
  styleUrls: ['./infor-ocupacion-arrendar.component.scss'],
})
export class InforOcupacionArrendarComponent implements OnInit {
  formInfoOcupacion: FormGroup = new FormGroup({});
  listaOcupacion: ParametrosShared[] = environment.listaOcupacion;
  isLogging: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataUserService: DataUserService,
    private messageService: MessageService
  ) {
    this.isLogging = this.dataUserService.enableToken() ? '/sesion' : '';
  }

  ngOnInit(): void {
    this.formInfoOcupacion = this.fb.group({
      empresa: ['', [Validators.required]],
      nitEmpresa: ['', [Validators.required]],
      direccionOcupacion: ['', [Validators.required]],
      ciudadOcupacion: ['', [Validators.required]],
      fechaIngreso: ['', [Validators.required]],
      cargoOcupacion: ['', [Validators.required]],
      tipoContrato: ['', [Validators.required]],
      telefonoEmpresa: ['', [Validators.required]],
      salario: ['', [Validators.required]],
      otroIngreso: ['', [Validators.required]],
      origenOtrosIngresos: ['', [Validators.required]],
      egresosMensuales: ['', [Validators.required]],
      actividadProfesional: ['', [Validators.required]],
      contacto: ['', [Validators.required]],
      otroIngresoOrigen: ['', [Validators.required]],
      empresaPensionado: ['', [Validators.required]],
      ingresoMensualPension: ['', [Validators.required]],
      deduccionMensual: ['', [Validators.required]],
    });
  }

  guardarFormularioArrendamiento() {
    console.log('formInfoOcupacion ', this.formInfoOcupacion.value);
  }

  prevPage() {
    console.log('formInfoOcupacion ', this.formInfoOcupacion.value);
    this.router.navigate(['/arrendamiento' + this.isLogging + '/informacion-general']);
  }

  nextPage() {
    console.log('formInfoOcupacion ', this.formInfoOcupacion.value);
    this.router.navigate(['/arrendamiento' + this.isLogging + '/referencias']);
  }
}
