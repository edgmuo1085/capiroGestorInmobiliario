import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { StepArrendamientosService } from 'src/app/components/shared/shared-services/step-arrendamientos.service';
import { StorageLocalService } from 'src/app/components/shared/shared-services/storage-local.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-referencias-arrendar',
  templateUrl: './referencias-arrendar.component.html',
  styleUrls: ['./referencias-arrendar.component.scss'],
})
export class ReferenciasArrendarComponent implements OnInit, OnDestroy {
  formReferencias: FormGroup = new FormGroup({});
  tiposCuentasBancos: ParametrosShared[] = environment.tiposCuentasBancos;
  isLogging: string = '';
  observableSubscription: Subscription[] = [];

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
    this.formReferencias = this.fb.group({
      isInvalidForm: false,
      nombreRazon: ['', [Validators.required]],
      celularRefencia: ['', [Validators.required, Validators.pattern(environment.soloNumeros)]],
      municipio: ['', [Validators.required]],

      nombresPersonalesUno: ['', [Validators.required]],
      celularPersonalesUno: ['', [Validators.required, Validators.pattern(environment.soloNumeros)]],
      municipioPersonalesUno: ['', [Validators.required]],
      nombresPersonalesDos: ['', [Validators.required]],
      celularPersonalesDos: ['', [Validators.required, Validators.pattern(environment.soloNumeros)]],
      municipioPersonalesDos: ['', [Validators.required]],

      nombresFamiliaresUno: ['', [Validators.required]],
      celularFamiliaresUno: ['', [Validators.required, Validators.pattern(environment.soloNumeros)]],
      municipioFamiliaresUno: ['', [Validators.required]],
      nombresFamiliaresDos: ['', [Validators.required]],
      celularFamiliaresDos: ['', [Validators.required, Validators.pattern(environment.soloNumeros)]],
      municipioFamiliaresDos: ['', [Validators.required]],

      tipoCuentaUno: ['', [Validators.required]],
      entidadFinancieraUno: ['', [Validators.required]],
      numCuentaUno: ['', [Validators.required, Validators.pattern(environment.soloNumeros)]],
      tipoCuentaDos: ['', [Validators.required]],
      entidadFinancieraDos: ['', [Validators.required]],
      numCuentaDos: ['', [Validators.required, Validators.pattern(environment.soloNumeros)]],
    });

    this.setValuesFormArrendamientoRefer();
  }

  setValuesFormArrendamientoRefer() {
    const sub1$ = this.stepArrendarService.getReferenciasArrendar().subscribe(response => {
      if (!response.nombreRazon) {
        return;
      }

      this.formReferencias.patchValue({
        nombreRazon: response.nombreRazon,
        celularRefencia: response.celularRefencia,
        municipio: response.municipio,
        nombresPersonalesUno: response.nombresPersonalesUno,
        celularPersonalesUno: response.celularPersonalesUno,
        municipioPersonalesUno: response.municipioPersonalesUno,
        nombresPersonalesDos: response.nombresPersonalesDos,
        celularPersonalesDos: response.celularPersonalesDos,
        municipioPersonalesDos: response.municipioPersonalesDos,
        nombresFamiliaresUno: response.nombresFamiliaresUno,
        celularFamiliaresUno: response.celularFamiliaresUno,
        municipioFamiliaresUno: response.municipioFamiliaresUno,
        nombresFamiliaresDos: response.nombresFamiliaresDos,
        celularFamiliaresDos: response.celularFamiliaresDos,
        municipioFamiliaresDos: response.municipioFamiliaresDos,
        tipoCuentaUno: response.tipoCuentaUno,
        entidadFinancieraUno: response.entidadFinancieraUno,
        numCuentaUno: response.numCuentaUno,
        tipoCuentaDos: response.tipoCuentaDos,
        entidadFinancieraDos: response.entidadFinancieraDos,
        numCuentaDos: response.numCuentaDos,
      });
    });

    this.observableSubscription.push(sub1$);
  }

  prevPage() {
    this.router.navigate(['/arrendamiento' + this.isLogging + '/informacion-ocupacion']);
  }

  nextPage() {
    if (this.formReferencias.invalid) {
      this.toastCustomService.showToast('Advertencia', 'Debe diligenciar todos los campos', 'error');
      return;
    }

    this.stepArrendarService.setReferenciasArrendar(this.formReferencias.value);
    this.storageService.localSet(environment.storageKey.infoReferenciasArrendar, JSON.stringify(this.formReferencias.value));
    this.router.navigate(['/arrendamiento' + this.isLogging + '/bienes']);
  }
}
