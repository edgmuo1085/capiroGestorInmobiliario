export interface ResponseLoginShared {
  idUsuario: number;
  nombres: string;
  apellidos: string;
  correo: string;
  identificacion: string;
  tipoIdentificacion: string;
  estado: string;
  tipoCuenta: string;
  token: string;
}

export type UserDataShared = ResponseLoginShared;
