export interface ResponseLoginShared {
  idUsuario: number;
  nombres: string;
  apellidos: string;
  correo: string;
  identificacion: string;
  tipoIdentificacion: string;
  password: string;
  token: string;
  estado: string;
  tipoCuenta: string;
}

export type UserDataShared = ResponseLoginShared;
