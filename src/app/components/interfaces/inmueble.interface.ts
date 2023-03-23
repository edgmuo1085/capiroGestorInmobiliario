export interface Inmueble {
  tipoInmueble: string;
  area: number;
  habitacion: number;
  estrato: string;
  banos: number;
  garage: string;
  estado: string;
  tiempo: string;
  precio: number;
  tipoPublicacion: string;
  tipoCons: string;
  idUsuario: number;
  id: number;
}

export class InmuebleModel implements Inmueble {
  constructor(
    public tipoInmueble: string,
    public area: number,
    public habitacion: number,
    public estrato: string,
    public banos: number,
    public garage: string,
    public estado: string,
    public tiempo: string,
    public precio: number,
    public tipoPublicacion: string,
    public tipoCons: string,
    public idUsuario: number,
    public id: number
  ) {}
}