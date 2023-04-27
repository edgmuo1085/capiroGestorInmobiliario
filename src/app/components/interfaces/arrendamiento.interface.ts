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
  empresa: string;
  nitEmpresa: string;
  direccionOcupacion: string;
  ciudadOcupacion: string;
  fechaIngreso: string;
  cargoOcupacion: string;
  tipoContrato: string;
  telefonoEmpresa: string;
  salario: string;
  otroIngreso: string;
  origenOtrosIngresos: string;
  egresosMensuales: string;
  actividadProfesional: string;
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
