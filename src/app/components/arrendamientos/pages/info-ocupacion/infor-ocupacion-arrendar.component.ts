import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { StepArrendamientosService } from 'src/app/components/shared/shared-services/step-arrendamientos.service';
import { StorageLocalService } from 'src/app/components/shared/shared-services/storage-local.service';
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
  observableSubscription: Subscription[] = [];
  opcionSelect: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataUserService: DataUserService,
    private storageService: StorageLocalService,
    private stepArrendarService: StepArrendamientosService
  ) {
    this.isLogging = this.dataUserService.enableToken() ? '/sesion' : '';
  }

  ngOnInit(): void {
    this.formInfoOcupacion = this.fb.group({
      isInvalidForm: false,
      selectOcupacion: ['', [Validators.required]],
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
      actividadProfesional: [''],
      contacto: [''],
      otroIngresoOrigen: [''],
      empresaPensionado: [''],
      ingresoMensualPension: [''],
      deduccionMensual: [''],
    });

    this.setValuesFormArrendamientoOcup();
  }

  setValuesFormArrendamientoOcup() {
    const sub1$ = this.stepArrendarService.getInfoOcupArrendar().subscribe(response => {
      if (!response.selectOcupacion) {
        this.opcionSelect = 'Empleado';
        this.formInfoOcupacion.patchValue({
          selectOcupacion: 'Empleado',
        });
        return;
      }
      this.opcionSelect = response.selectOcupacion;

      this.formInfoOcupacion.patchValue({
        selectOcupacion: response.selectOcupacion,
        empresa: response.empresa,
        nitEmpresa: response.nitEmpresa,
        direccionOcupacion: response.direccionOcupacion,
        ciudadOcupacion: response.ciudadOcupacion,
        fechaIngreso: response.fechaIngreso,
        cargoOcupacion: response.cargoOcupacion,
        tipoContrato: response.tipoContrato,
        telefonoEmpresa: response.telefonoEmpresa,
        salario: response.salario,
        otroIngreso: response.otroIngreso,
        origenOtrosIngresos: response.origenOtrosIngresos,
        egresosMensuales: response.egresosMensuales,
        actividadProfesional: response.actividadProfesional,
        contacto: response.contacto,
        otroIngresoOrigen: response.otroIngresoOrigen,
        empresaPensionado: response.empresaPensionado,
        ingresoMensualPension: response.ingresoMensualPension,
        deduccionMensual: response.deduccionMensual,
      });
    });

    this.observableSubscription.push(sub1$);
  }

  prevPage() {
    //console.log('formInfoOcupacion ', this.formInfoOcupacion.value);
    this.router.navigate(['/arrendamiento' + this.isLogging + '/informacion-general']);
  }

  nextPage() {
    //console.log('formInfoOcupacion ', this.formInfoOcupacion.value);
    if (this.formInfoOcupacion.invalid) {
      return;
    }

    this.stepArrendarService.setInfoOcupArrendar(this.formInfoOcupacion.value);
    this.storageService.localSet(environment.storageKey.infoOcupacionArrendar, JSON.stringify(this.formInfoOcupacion.value));
    this.router.navigate(['/arrendamiento' + this.isLogging + '/referencias']);
  }
}
