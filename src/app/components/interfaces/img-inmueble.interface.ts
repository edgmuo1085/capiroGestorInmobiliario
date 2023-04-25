export interface ImagesInmuebleUp {
  nameFile: string;
  sizeFile: number;
  progress: number;
  nombreArchivo: string;
  nombreSinExt: string;
  formato: string;
  idUsuario: number;
  idInmueble: number;
  archivo: string;
  tipoDocumento: string;
}

export interface DocumentoInmuebleUp extends ImagesInmuebleUp {
  idAvaluo: number;
}
