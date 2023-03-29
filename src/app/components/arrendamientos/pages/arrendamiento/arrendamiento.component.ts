import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-arrendamiento',
  templateUrl: './arrendamiento.component.html',
  styleUrls: ['./arrendamiento.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArrendamientoComponent implements OnInit {
  items: MenuItem[] = [];
  activeIndex: number = 0;
  formArrendamientos: FormGroup = new FormGroup({});

  seccionInformacionGeneral: boolean = true;
  seccionOcupacion: boolean = false;
  seccionReferencias: boolean = false;
  seccionBienes: boolean = false;

  tiposInmuebles: ParametrosShared[] = environment.tiposInmuebles;
  tiposDocumentos: ParametrosShared[] = environment.tiposDocumentos;
  listaSexos: ParametrosShared[] = environment.listaSexos;
  listaNivelEstudio: ParametrosShared[] = environment.listaNivelEstudio;
  listadoEstadosCivil: ParametrosShared[] = environment.listadoEstadosCivil;
  listaOcupacion: ParametrosShared[] = environment.listaOcupacion;
  tiposCuentasBancos: ParametrosShared[] = environment.tiposCuentasBancos;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.items = [
      {
        label: 'Información General',
        command: (event: any) => {
          this.activeIndex = 0;
          this.seccionInformacionGeneral = true;
          this.seccionOcupacion = false;
          this.seccionReferencias = false;
          this.seccionBienes = false;
        },
      },
      {
        label: 'Información Ocupación',
        command: (event: any) => {
          this.activeIndex = 1;
          this.seccionInformacionGeneral = false;
          this.seccionOcupacion = true;
          this.seccionReferencias = false;
          this.seccionBienes = false;
        },
      },
      {
        label: 'Referencias',
        command: (event: any) => {
          this.activeIndex = 2;
          this.seccionInformacionGeneral = false;
          this.seccionOcupacion = false;
          this.seccionReferencias = true;
          this.seccionBienes = false;
        },
      },
      {
        label: 'Bienes',
        command: (event: any) => {
          this.activeIndex = 3;
          this.seccionInformacionGeneral = false;
          this.seccionOcupacion = false;
          this.seccionReferencias = false;
          this.seccionBienes = true;
        },
      },
    ];
  }

  ngOnInit(): void {
    this.formArrendamientos = this.fb.group({
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

      empresa: ['', [Validators.required]],
      nitEmpresa: ['', [Validators.required]],
      direccionEmpresa: ['', [Validators.required]],
      ciudadEmpresa: ['', [Validators.required]],
      fechaIngreso: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      tipoContrato: ['', [Validators.required]],
      telefonoEmpresa: ['', [Validators.required]],
      salario: ['', [Validators.required]],
      otroIngreso: ['', [Validators.required]],
      origenOtrosIngresos: ['', [Validators.required]],
      egresosMensuales: ['', [Validators.required]],
      idUsuario: ['', [Validators.required]],
      idInmueble: ['', [Validators.required]],

      nombreRazon: ['', [Validators.required]],
      celularRefencia: ['', [Validators.required]],
      municipio: ['', [Validators.required]],

      tipoCuenta: ['', [Validators.required]],
      entidadFinanciera: ['', [Validators.required]],
      numeroCuenta: ['', [Validators.required]],

      tipoInmuebleDire: ['', [Validators.required]],
      matricula: ['', [Validators.required]],
      municipioInmueble: ['', [Validators.required]],

      vehiculoMarca: ['', [Validators.required]],
      vehiculoPlaca: ['', [Validators.required]],
      vehiculoModelo: ['', [Validators.required]],

      observaciones: ['', [Validators.required]],
    });
  }

  guardarFormularioArrendamiento() {
    console.log('Prueba formulario ', this.formArrendamientos.value);
  }

  activarTab(label: string) {
    console.log(label);
  }
}
