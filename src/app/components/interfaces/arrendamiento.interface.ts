export interface InformacionGeneralA {
  direccionPredio: string;
  destinacionPredio: string;
  arrendamientoMen: string;
  tipoInmueble: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  tipoDoc: string;
  numeroDoc: string;
  fechaExpedicion: string;
  lugarExpedicion: string;
  lugarNacimiento: string;
  sexo: string;
  nacionalidad: string;
  direccionActual: string;
  ciudad: string;
  nivelEstudio: string;
  correo: string;
  celular: string;
  ocupacion: string;
  personasAcargo: string;
  estadoCivil: string;
  /** faltan */
  nombresConyuge: string;
  apellidosConyuge: string;
  tipoDocConyuge: string;
  numeroDocConyuge: string;
  correoConyuge: string;
  celularConyuge: string;
  ocupacionConyuge: string;
  ingresosConyuge: string;
}

export interface InformacionOcupacionA {
  selectOcupacion: string;
  empresa: string;
  nitEmpresa: string;
  direccionEmpresa: string;
  ciudadEmpresa: string;
  fechaIngreso: string;
  cargo: string;
  tipoContrato: string;
  telefonoEmpresa: string;
  salario: string;
  otroIngreso: string;
  origenOtrosIngresos: string;
  egresosMensuales: string;
  actividadProfesional: string;
  /** faltan */
  contacto: string;
  otroIngresoOrigen: string;
  empresaPensionado: string;
  ingresoMensualPension: string;
  deduccionMensual: string;
}

export interface ReferenciasA {
  nombreRazon: string;
  celularRefencia: string;
  municipio: string;
  nombresPersonalesUno: string;
  celularPersonalesUno: string;
  municipioPersonalesUno: string;
  nombresPersonalesDos: string;
  celularPersonalesDos: string;
  municipioPersonalesDos: string;
  nombresFamiliaresUno: string;
  celularFamiliaresUno: string;
  municipioFamiliaresUno: string;
  nombresFamiliaresDos: string;
  celularFamiliaresDos: string;
  municipioFamiliaresDos: string;
  tipoCuentaUno: string;
  entidadFinancieraUno: string;
  numCuentaUno: string;
  tipoCuentaDos: string;
  entidadFinancieraDos: string;
  numCuentaDos: string;
}

export interface BienesA {
  tipoInmuebleDireccionUno: string;
  matriculaNumeroUno: string;
  municipioInmuebleUno: string;
  tipoInmuebleDireccionDos: string;
  matriculaNumeroDos: string;
  municipioInmuebleDos: string;
  vehiculoMarcaUno: string;
  vehiculoModeloUno: string;
  vehiculoPlacaUno: string;
  vehiculoMarcaDos: string;
  vehiculoModeloDos: string;
  vehiculoPlacaDos: string;
  observaciones: string;
}

export interface CrearArriendo {
  /** info general */
  direccionPredio: string;
  destinacionPredio: string;
  arrendamientoMen: number;
  tipoInmueble: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  tipoDoc: string;
  numeroDoc: string;
  fechaExpedicion: string;
  lugarExpedicion: string;
  lugarNacimiento: string;
  sexo: string;
  nacionalidad: string;
  direccionActual: string;
  ciudad: string;
  nivelEstudio: string;
  correo: string;
  celular: string;
  ocupacion: string;
  personasAcargo: number;
  estadoCivil: string;
  /** faltantes inf gen */
  nombresConyuge: string;
  apellidosConyuge: string;
  tipoDocConyuge: string;
  numeroDocConyuge: string;
  correoConyuge: string;
  celularConyuge: string;
  ocupacionConyuge: string;
  ingresosConyuge: string;
  /** info ocupacional */
  empresa: string;
  nitEmpresa: string;
  direccionEmpresa: string;
  ciudadEmpresa: string;
  fechaIngreso: string;
  cargo: string;
  tipoContrato: string;
  telefonoEmpresa: number;
  salario: number;
  otroIngreso: number;
  origenOtrosIngresos: string;
  egresosMensuales: number;
  idUsuario: number;
  idInmueble: number;
  actividadProfesional: string;
  observaciones: string;
  rf: ReferenciasComerciales;
  /** faltantes inf ocu */
  contacto: string;
  otroIngresoOrigen: string;
  empresaPensionado: string;
  ingresoMensualPension: string;
  deduccionMensual: string;
}

export interface Arriendo extends CrearArriendo {
  id: number;
}

export interface ReferenciasComerciales {
  nombreRazon: string;
  celularReferencia: string;
  municipio: string;
  idFormulario: number;
}

export class CrearArriendoModel implements CrearArriendo {
  constructor(
    public direccionPredio: string,
    public destinacionPredio: string,
    public arrendamientoMen: number,
    public tipoInmueble: string,
    public nombres: string,
    public apellidos: string,
    public fechaNacimiento: string,
    public tipoDoc: string,
    public numeroDoc: string,
    public fechaExpedicion: string,
    public lugarExpedicion: string,
    public lugarNacimiento: string,
    public sexo: string,
    public nacionalidad: string,
    public direccionActual: string,
    public ciudad: string,
    public nivelEstudio: string,
    public correo: string,
    public celular: string,
    public ocupacion: string,
    public personasAcargo: number,
    public estadoCivil: string,

    public nombresConyuge: string,
    public apellidosConyuge: string,
    public tipoDocConyuge: string,
    public numeroDocConyuge: string,
    public correoConyuge: string,
    public celularConyuge: string,
    public ocupacionConyuge: string,
    public ingresosConyuge: string,

    public empresa: string,
    public nitEmpresa: string,
    public direccionEmpresa: string,
    public ciudadEmpresa: string,
    public fechaIngreso: string,
    public cargo: string,
    public tipoContrato: string,
    public telefonoEmpresa: number,
    public salario: number,
    public otroIngreso: number,
    public origenOtrosIngresos: string,
    public egresosMensuales: number,
    public idUsuario: number,
    public idInmueble: number,
    public actividadProfesional: string,
    public observaciones: string,
    public rf: ReferenciasComerciales,
    public contacto: string,
    public otroIngresoOrigen: string,
    public empresaPensionado: string,
    public ingresoMensualPension: string,
    public deduccionMensual: string
  ) {}
}

export interface ReferenciasPersonales {
  nombrePersonal: string;
  celularPersonal: string;
  municipioPersonal: string;
  idFormulario: number;
}

export class RefPersonalesModel implements ReferenciasPersonales {
  constructor(
    public nombrePersonal: string,
    public celularPersonal: string,
    public municipioPersonal: string,
    public idFormulario: number
  ) {}
}

export interface ReferenciasFamiliares {
  nombreFamiliar: string;
  celularFamiliar: string;
  municipioFamiliar: string;
  idFormulario: number;
}

export class RefFamiliaresModel implements ReferenciasFamiliares {
  constructor(
    public nombreFamiliar: string,
    public celularFamiliar: string,
    public municipioFamiliar: string,
    public idFormulario: number
  ) {}
}

export interface ReferenciasBancarias {
  tipoCuenta: string;
  entidadFinanciera: string;
  numeroCuenta: string;
  idFormulario: number;
}

export class RefBancariasModel implements ReferenciasBancarias {
  constructor(public tipoCuenta: string, public entidadFinanciera: string, public numeroCuenta: string, public idFormulario: number) {}
}

export interface Bienes {
  tipoInmuebleDire: string;
  matricula: string;
  municipioInmueble: string;
  idFormulario: number;
}

export class BienesModel implements Bienes {
  constructor(public tipoInmuebleDire: string, public matricula: string, public municipioInmueble: string, public idFormulario: number) {}
}

export interface Vehiculos {
  vehiculoMarca: string;
  vehiculoModelo: string;
  vehiculoPlaca: string;
  idFormulario: number;
}

export class VehiculosModel implements Vehiculos {
  constructor(public vehiculoMarca: string, public vehiculoModelo: string, public vehiculoPlaca: string, public idFormulario: number) {}
}
