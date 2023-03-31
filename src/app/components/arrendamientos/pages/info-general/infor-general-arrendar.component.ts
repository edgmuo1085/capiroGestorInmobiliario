import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-infor-general-arrendar',
  templateUrl: './infor-general-arrendar.component.html',
  styleUrls: ['./infor-general-arrendar.component.scss'],
})
export class InforGeneralArrendarComponent implements OnInit {
  formInfoGeneral: FormGroup = new FormGroup({});
  tiposInmuebles: ParametrosShared[] = environment.tiposInmuebles;
  tiposDocumentos: ParametrosShared[] = environment.tiposDocumentos;
  listaSexos: ParametrosShared[] = environment.listaSexos;
  listaNivelEstudio: ParametrosShared[] = environment.listaNivelEstudio;
  listadoEstadosCivil: ParametrosShared[] = environment.listadoEstadosCivil;
  listaOcupacion: ParametrosShared[] = environment.listaOcupacion;
  tiposCuentasBancos: ParametrosShared[] = environment.tiposCuentasBancos;
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
      correo: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      ocupacion: ['', [Validators.required]],
      personasAcargo: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      nombresC: ['', [Validators.required]],

      apellidosC: ['', [Validators.required]],
      tipoDocC: ['', [Validators.required]],
      numeroDocC: ['', [Validators.required]],
      correoC: ['', [Validators.required]],
      celularC: ['', [Validators.required]],
      ocupacionC: ['', [Validators.required]],
      ingresosC: ['', [Validators.required]],
    });
  }

  guardarFormularioArrendamiento() {
    console.log('formInfoGeneral ', this.formInfoGeneral.value);
  }

  nextPage() {
    console.log('formInfoGeneral ', this.formInfoGeneral.value);
    this.router.navigate(['/arrendamiento' + this.isLogging + '/informacion-ocupacion']);
  }
}
