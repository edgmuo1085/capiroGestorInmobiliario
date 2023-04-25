export interface ArchivoInmueble {
  nombreArchivo: string;
  formato: string;
  idUsuario: number;
  idInmueble: number;
  archivo: string;
  tipoDocumento: string;
}

export class ArchivoInmuebleModel implements ArchivoInmueble {
  constructor(
    public nombreArchivo: string,
    public formato: string,
    public idUsuario: number,
    public idInmueble: number,
    public archivo: string,
    public tipoDocumento: string
  ) {}
}

export interface ArchivoInmuebleUp extends ArchivoInmueble {
  Id: number;
}

export class ArchivoInmuebleUpModel implements ArchivoInmuebleUp {
  constructor(
    public nombreArchivo: string,
    public formato: string,
    public idUsuario: number,
    public idInmueble: number,
    public archivo: string,
    public tipoDocumento: string,
    public Id: number
  ) {}
}
export interface DocumentoUp {
  nombreArchivo: string;
  formato: string;
  idUsuario: number;
  archivo: string;
  idAvaluo: number;
  tipoDocumento: string;
}

export class DocumentoUpModel implements DocumentoUp {
  constructor(
    public nombreArchivo: string,
    public formato: string,
    public idUsuario: number,
    public archivo: string,
    public idAvaluo: number,
    public tipoDocumento: string
  ) {}
}
