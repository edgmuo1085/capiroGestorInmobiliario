import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-arrendamiento',
  templateUrl: './arrendamiento.component.html',
  styleUrls: ['./arrendamiento.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArrendamientoComponent implements OnInit {
  items: MenuItem[] = [];
  activeIndex: number = 0;
  subscription!: Subscription;
  isLinear = false;
  empleado = false;
  independiente = false;
  pensionado = false;
  estadoCivil = false;
  formArrendamientos!: FormGroup;

  seccionInformacionGeneral: boolean = true;
  seccionOcupacion: boolean = false;
  seccionReferencias: boolean = false;
  seccionBienes: boolean = false;

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

  ocupacion(valor: string) {
    if (valor === '1') {
      this.empleado = true;
      this.independiente = false;
      this.pensionado = false;
    } else if (valor === '2') {
      this.independiente = true;
      this.empleado = false;
      this.pensionado = false;
    } else if (valor === '3') {
      this.pensionado = true;
      this.empleado = false;
      this.independiente = false;
    } else {
      this.empleado = false;
      this.independiente = false;
      this.pensionado = false;
    }
  }

  estdoCivil(valor: String) {
    if (valor === 'casado') {
      this.estadoCivil = true;
    } else {
      this.estadoCivil = false;
    }
  }

  enviar() {
    console.log('Prueba formulario ', this.formArrendamientos.value);
  }

  activarTab(label: string) {
    console.log(label);
  }
}
