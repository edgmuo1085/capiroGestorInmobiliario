import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inmuebles-filtros',
  templateUrl: './inmuebles-filtros.component.html',
  styleUrls: ['./inmuebles-filtros.component.scss'],
})
export class InmueblesFiltrosComponent implements OnInit {
  @Output() actionFiltrosInmueble: EventEmitter<any> = new EventEmitter<any>();

  tiposInmuebles: ParametrosShared[] = environment.tiposInmuebles;
  estadosInmueble: ParametrosShared[] = environment.estadoInmueble;
  listaHabitaciones: ParametrosShared[] = environment.listaHabitaciones;
  tipoInmueble: string = '';
  presupuesto: string = '';
  estado: string = '';
  habitaciones: string = '';

  constructor() {}

  ngOnInit(): void {}

  limpiarFiltros() {
    this.tipoInmueble = '';
    this.presupuesto = '';
    this.estado = '';
    this.habitaciones = '';
    this.actionFiltrosInmueble.emit();
  }

  consultarFiltro(event: any) {
    if (!event.target.value) {
      return;
    }

    let data = [
      { keyForm: 'tipoInmueble', valueForm: this.tipoInmueble },
      { keyForm: 'precio', valueForm: this.presupuesto },
      { keyForm: 'estado', valueForm: this.estado },
      { keyForm: 'habitacion', valueForm: this.habitaciones },
    ];

    let json = {};
    data.map(item => {
      if (!item.valueForm) {
        return;
      }
      json = {
        ...json,
        ...{ [item.keyForm]: item.valueForm },
      };
    });

    console.log(json);
    this.actionFiltrosInmueble.emit(json);
  }
}
