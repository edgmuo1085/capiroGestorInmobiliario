import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { departamento } from '../../interfaces/departamento.interfaces';

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {
  constructor(private http: HttpClient) {}

  depar(nombreBusqueda: string): Observable<string[]> {
    return this.http.get<departamento[]>('./assets/data/departamento.json')
      .pipe(
        map((departamentos: departamento[]) => {
          // Filtrar departamentos por nombre
          const resultados = departamentos.filter(depto => depto.departamento.toLowerCase().includes(nombreBusqueda.toLowerCase()));
  
          // Obtener todas las ciudades de los departamentos filtrados
          const ciudades: string[] = [];
          resultados.forEach((departamento: departamento) => {
            departamento.ciudades.forEach((ciudad: string) => {
              ciudades.push(ciudad);
            });
          });
  
          return ciudades;
        })
      );
  }}
