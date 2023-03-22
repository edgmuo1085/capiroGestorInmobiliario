import { Inmueble } from './inmueble.interface';
import { ResponseArchivo } from './respose-archivo.interface';

export interface ResponseInmueble extends Inmueble {
  fotos: ResponseArchivo[];
}
