import { DocumentoAvaluoHipoteca } from './documentos-avaluo-hipoteca.interface';

export interface AvaluoHipoteca {
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
  idUsuario: number;
}

export interface ResponseAvaluoHipoteca extends AvaluoHipoteca {
  id: number;
  documentos: DocumentoAvaluoHipoteca[];
}

export type ResponseAvaluo = Omit<AvaluoHipoteca, 'valor' | 'area' | 'usoPropiedad' | 'afectacion'>;

export type ResponseHipeteca = Omit<
  AvaluoHipoteca,
  'niveles' | 'habitaciones' | 'garaje' | 'banos' | 'tiempoConstruido' | 'tipoConstruccion' | 'ubicacion'
>;

export class AvaluoModel implements ResponseAvaluo {
  constructor(
    public tipoFormulario: string,
    public tipoInmueble: string,
    public estrato: string,
    public niveles: string,
    public habitaciones: string,
    public garaje: string,
    public banos: string,
    public tiempoConstruido: string,
    public tipoConstruccion: string,
    public ubicacion: string,
    public direccion: string,
    public nombre: string,
    public apellido: string,
    public correo: string,
    public celular: string,
    public idUsuario: number
  ) {}
}

export class HipotecaModel implements ResponseHipeteca {
  constructor(
    public tipoFormulario: string,
    public tipoInmueble: string,
    public estrato: string,
    public direccion: string,
    public nombre: string,
    public apellido: string,
    public correo: string,
    public celular: string,
    public valor: string,
    public area: string,
    public usoPropiedad: string,
    public afectacion: string,
    public idUsuario: number
  ) {}
}
