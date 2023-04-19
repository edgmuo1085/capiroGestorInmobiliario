import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { StepArrendamientosService } from 'src/app/components/shared/shared-services/step-arrendamientos.service';
import { StorageLocalService } from 'src/app/components/shared/shared-services/storage-local.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-infor-general-arrendar',
  templateUrl: './infor-general-arrendar.component.html',
  styleUrls: ['./infor-general-arrendar.component.scss'],
})
export class InforGeneralArrendarComponent implements OnInit, OnDestroy {
  formInfoGeneral: FormGroup = new FormGroup({});
  tiposInmuebles: ParametrosShared[] = environment.tiposInmuebles;
  tiposDocumentos: ParametrosShared[] = environment.tiposDocumentos;
  listaSexos: ParametrosShared[] = environment.listaSexos;
  listaNivelEstudio: ParametrosShared[] = environment.listaNivelEstudio;
  listadoEstadosCivil: ParametrosShared[] = environment.listadoEstadosCivil;
  listaOcupacion: ParametrosShared[] = environment.listaOcupacion;
  tiposCuentasBancos: ParametrosShared[] = environment.tiposCuentasBancos;
  estadoCivilBlock: boolean = false;
  isLogging: string = '';
  observableSubscription: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataUserService: DataUserService,
    private storageService: StorageLocalService,
    private stepArrendarService: StepArrendamientosService
  ) {
    this.isLogging = this.dataUserService.enableToken() ? '/sesion' : '';
    this.setValuesFormArrendamiento();
  }

  ngOnDestroy(): void {
    if (this.observableSubscription) {
      this.observableSubscription.forEach(s => s.unsubscribe());
    }
  }

  ngOnInit(): void {
    this.formInfoGeneral = this.fb.group({
      direccionPredio: ['', [Validators.required]],
      destinacionPredio: ['', [Validators.required]],
      arrendamientoMen: ['', [Validators.required]],
      tipoInmueble: ['', [Validators.required]],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      tipoDoc: ['', [Validators.required]],
      numeroDoc: ['', [Validators.required]],
      fechaExpedicion: ['', [Validators.required]],
      lugarExpedicion: ['', [Validators.required]],
      lugarNacimiento: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]],
      direccionActual: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      nivelEstudio: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required]],
      ocupacion: ['', [Validators.required]],
      personasAcargo: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],

      nombresC: [''],
      apellidosC: [''],
      tipoDocC: [''],
      numeroDocC: [''],
      correoC: [''],
      celularC: [''],
      ocupacionC: [''],
      ingresosC: [''],
    });
    this.setValuesFormArrendamiento();
  }

  setValuesFormArrendamiento() {
    const sub1$ = this.stepArrendarService.getInfoGeneralArrendar().subscribe(response => {
      if (!response) {
        return;
      }

      this.estadoCivilBlock = response.estadoCivil === 'Casado' ? true : false;

      this.formInfoGeneral.patchValue({
        direccionPredio: response.direccionPredio,
        destinacionPredio: response.destinacionPredio,
        arrendamientoMen: response.arrendamientoMen,
        tipoInmueble: response.tipoInmueble,
        nombres: response.nombres,
        apellidos: response.apellidos,
        fechaNacimiento: response.fechaNacimiento,
        tipoDoc: response.tipoDoc,
        numeroDoc: response.numeroDoc,
        fechaExpedicion: response.fechaExpedicion,
        lugarExpedicion: response.lugarExpedicion,
        lugarNacimiento: response.lugarNacimiento,
        sexo: response.sexo,
        nacionalidad: response.nacionalidad,
        direccionActual: response.direccionActual,
        ciudad: response.ciudad,
        nivelEstudio: response.nivelEstudio,
        correo: response.correo,
        celular: response.celular,
        ocupacion: response.ocupacion,
        personasAcargo: response.personasAcargo,
        estadoCivil: response.estadoCivil,
        nombresC: response.nombresC,
        apellidosC: response.apellidosC,
        tipoDocC: response.tipoDocC,
        numeroDocC: response.numeroDocC,
        correoC: response.correoC,
        celularC: response.celularC,
        ocupacionC: response.ocupacionC,
        ingresosC: response.ingresosC,
      });
    });

    this.observableSubscription.push(sub1$);
  }

  nextPage() {
    console.log('form: ', this.formInfoGeneral.controls);
    if (this.formInfoGeneral.invalid) {
      return;
    }

    this.stepArrendarService.setInfoGenArrendar(this.formInfoGeneral.value);
    this.storageService.localSet(environment.storageKey.infoGeneralArrendar, JSON.stringify(this.formInfoGeneral.value));
    this.router.navigate(['/arrendamiento' + this.isLogging + '/informacion-ocupacion']);
  }
}
