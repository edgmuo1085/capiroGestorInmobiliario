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
  direccion: string;
  departamento: string;
  municipio: string;
  sector: string;
  tipoCocina: string;
  zona: string;
  closeth: number;
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
    public direccion: string,
    public departamento: string,
    public municipio: string,
    public sector: string,
    public tipoCocina: string,
    public zona: string,
    public closeth: number,
    public id: number
  ) {}
}

export type InmuebleRegistro = Omit<Inmueble, 'id'>;

export class InmuebleRegistroModel implements InmuebleRegistro {
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
    public direccion: string,
    public departamento: string,
    public municipio: string,
    public sector: string,
    public tipoCocina: string,
    public zona: string,
    public closeth: number,
    public idUsuario: number
  ) {}
}
