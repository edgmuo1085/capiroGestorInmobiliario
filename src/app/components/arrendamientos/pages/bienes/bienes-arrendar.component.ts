import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BienesA, InformacionGeneralA, InformacionOcupacionA, ReferenciasA } from 'src/app/components/interfaces/arrendamiento.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { StepArrendamientosService } from 'src/app/components/shared/shared-services/step-arrendamientos.service';
import { StorageLocalService } from 'src/app/components/shared/shared-services/storage-local.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bienes-arrendar',
  templateUrl: './bienes-arrendar.component.html',
  styleUrls: ['./bienes-arrendar.component.scss'],
})
export class BienesArrendarComponent implements OnInit, OnDestroy {
  formBienes: FormGroup = new FormGroup({});
  isLogging: string = '';
  loading: boolean = false;
  observableSubscription: Subscription[] = [];
  informacionGeneralA: InformacionGeneralA = {} as InformacionGeneralA;
  informacionOcupacionA: InformacionOcupacionA = {} as InformacionOcupacionA;
  informacionReferenciasA: ReferenciasA = {} as ReferenciasA;
  informacionBienesA: BienesA = {} as BienesA;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataUserService: DataUserService,
    private storageService: StorageLocalService,
    private toastCustomService: ToastCustomService,
    private stepArrendarService: StepArrendamientosService
  ) {
    this.isLogging = this.dataUserService.enableToken() ? '/sesion' : '';
  }

  ngOnDestroy(): void {
    if (this.observableSubscription) {
      this.observableSubscription.forEach(s => s.unsubscribe());
    }
  }

  ngOnInit(): void {
    this.formBienes = this.fb.group({
      isInvalidForm: false,
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

    this.setValuesFormArrendamientoRefer();
  }

  prevPage() {
    this.stepArrendarService.setBienesArrendar(this.formBienes.value);
    this.storageService.localSet(environment.storageKey.infoBienesArrendar, JSON.stringify(this.formBienes.value));
    this.router.navigate(['/arrendamiento' + this.isLogging + '/referencias']);
  }

  setValuesFormArrendamientoRefer() {
    const sub1$ = this.stepArrendarService.getBienesArrendar().subscribe(response => {
      if (!response.tipoInmuebleDireccionUno) {
        return;
      }

      this.formBienes.patchValue({
        tipoInmuebleDireccionUno: response.tipoInmuebleDireccionUno,
        matriculaNumeroUno: response.matriculaNumeroUno,
        municipioInmuebleUno: response.municipioInmuebleUno,
        tipoInmuebleDireccionDos: response.tipoInmuebleDireccionDos,
        matriculaNumeroDos: response.matriculaNumeroDos,
        municipioInmuebleDos: response.municipioInmuebleDos,
        vehiculoMarcaUno: response.vehiculoMarcaUno,
        vehiculoModeloUno: response.vehiculoModeloUno,
        vehiculoPlacaUno: response.vehiculoPlacaUno,
        vehiculoMarcaDos: response.vehiculoMarcaDos,
        vehiculoModeloDos: response.vehiculoModeloDos,
        vehiculoPlacaDos: response.vehiculoPlacaDos,
        observaciones: response.observaciones,
      });
    });

    this.observableSubscription.push(sub1$);
  }

  guardarFormularioBienes() {
    if (this.formBienes.invalid) {
      this.toastCustomService.showToast('Advertencia', 'Debe diligenciar todos los campos', 'error');
      return;
    }
    this.stepArrendarService.setBienesArrendar(this.formBienes.value);
    this.storageService.localSet(environment.storageKey.infoBienesArrendar, JSON.stringify(this.formBienes.value));
    this.setFormsArrendamiento();
  }

  setFormsArrendamiento() {
    const sub1$ = this.stepArrendarService.getInfoGeneralArrendar().subscribe(response => {
      if (!response.estadoCivil) {
        return;
      }
      this.informacionGeneralA = response;
    });

    const sub2$ = this.stepArrendarService.getInfoOcupArrendar().subscribe(response => {
      if (!response.selectOcupacion) {
        return;
      }
      this.informacionOcupacionA = response;
    });

    const sub3$ = this.stepArrendarService.getReferenciasArrendar().subscribe(response => {
      if (!response.nombreRazon) {
        return;
      }
      this.informacionReferenciasA = response;
    });

    const sub4$ = this.stepArrendarService.getBienesArrendar().subscribe(response => {
      if (!response.tipoInmuebleDireccionUno) {
        return;
      }
      this.informacionBienesA = response;
    });

    this.observableSubscription.push(sub1$);
    this.observableSubscription.push(sub2$);
    this.observableSubscription.push(sub3$);
    this.observableSubscription.push(sub4$);

    console.log('informacionGeneralA: ', this.informacionGeneralA);
    console.log('informacionOcupacionA: ', this.informacionOcupacionA);
    console.log('informacionReferenciasA: ', this.informacionReferenciasA);
    console.log('informacionBienesA: ', this.informacionBienesA);

    this.loading = true;
    setTimeout(() => {
      this.toastCustomService.showToast('Información', 'Datos guardados con éxito');
      this.loading = false;
    }, 2000);
  }

  enviarFormulario() {
    console.log('formBienes ', this.formBienes.value);
    console.log('guardar formulario');
  }
}
