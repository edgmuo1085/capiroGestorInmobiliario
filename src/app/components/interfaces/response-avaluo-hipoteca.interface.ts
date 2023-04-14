export interface ResponseAvaluoHipoteca {
  id: number;
  tipoFormulario: string;
  tipoInmueble: string;
  estrato: string;
  niveles: string;
  habitaciones: string;
  garaje: string;
  banos: string;
  tiempoConstruido: string;
  tipoConstruccion: string;
  ubicacion: string;
  direccion: string;
  nombre: string;
  apellido: string;
  correo: string;
  celular: string;
  valor: string;
  area: string;
  usoPropiedad: string;
  afectacion: string;
}

/* export class InmuebleModel implements Inmueble {
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
 */
