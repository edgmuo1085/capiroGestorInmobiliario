import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-arrendamientos',
  templateUrl: './arrendamientos.component.html',
  styleUrls: ['./arrendamientos.component.css']
})
export class ArrendamientosComponent implements OnInit {

  isLinear = false;
  empleado = false;
  independiente = false;
  pensionado = false;
  estadoCivil = false;
  formArrendamientos!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formArrendamientos = this.fb.group({
      direccionPredio: ['',Validators.required],
      destinacionPredio: ['',Validators.required],
      arrendamientoMen: ['',Validators.required],
      tipoInmueble: ['',Validators.required],

      nombres: ['',Validators.required],
      apellidos: ['',Validators.required],
      fechaNacimiento: ['',Validators.required],
      tipoDoc: ['',Validators.required],
      numeroDoc: ['',Validators.required],
      fechaExpedicion: ['',Validators.required],
      lugarExpedicion: ['',Validators.required],
      lugarNacimiento: ['',Validators.required],
      sexo: ['',Validators.required],
      nacionalidad: ['',Validators.required],
      direccionActual: ['',Validators.required],
      ciudad: ['',Validators.required],
      nivelEstudio: ['',Validators.required],
      correo: ['',Validators.required],
      celular: ['',Validators.required],
      ocupacion: ['',Validators.required],
      personasAcargo: ['',Validators.required],
      estadoCivil: ['',Validators.required],

      empresa: ['', Validators.required],
      nitEmpresa: ['', Validators.required],
      direccionEmpresa: ['', Validators.required],
      ciudadEmpresa: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      cargo: ['', Validators.required],
      tipoContrato: ['', Validators.required],
      telefonoEmpresa: ['', Validators.required],
      salario: ['', Validators.required],
      otroIngreso: ['', Validators.required],
      origenOtrosIngresos: ['', Validators.required],
      egresosMensuales: ['', Validators.required],
      idUsuario: ['', Validators.required],
      idInmueble: ['', Validators.required],

      nombreRazon: ['', Validators.required],
      celularRefencia: ['', Validators.required],
      municipio: ['', Validators.required],

      tipoCuenta: ['',Validators.required],
      entidadFinanciera: ['',Validators.required],
      numeroCuenta: ['',Validators.required],

      tipoInmuebleDire: ['', Validators.required],
      matricula: ['', Validators.required],
      municipioInmueble: ['', Validators.required],

      vehiculoMarca: ['', Validators.required],
      vehiculoPlaca: ['', Validators.required],
      vehiculoModelo: ['', Validators.required],
      
      observaciones: ['', Validators.required],
    })
  }

  ocupacion(valor: string){
    if(valor === '1'){
      this.empleado = true;
      this.independiente = false;
      this.pensionado = false;
    } else if(valor === '2') {
      this.independiente = true;
      this.empleado = false;
      this.pensionado = false;
    } else if(valor === '3') {
      this.pensionado = true;
      this.empleado = false;
      this.independiente = false;
    } else {
      this.empleado = false;
      this.independiente = false;
      this.pensionado = false;
    }
  }

  estdoCivil(valor: String){
    if(valor === 'casado'){
      this.estadoCivil = true;
    } else {
      this.estadoCivil = false;
    }
  }


  enviar(){
    console.log('Prueba formulario ',this.formArrendamientos.value);
  }

}
