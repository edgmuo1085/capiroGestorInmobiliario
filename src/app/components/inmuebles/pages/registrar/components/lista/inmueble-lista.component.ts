import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';

@Component({
  selector: 'app-inmueble-lista',
  templateUrl: './inmueble-lista.component.html',
  styleUrls: ['./inmueble-lista.component.scss'],
})
export class InmuebleListaComponent implements OnInit {
  listaInmuebles: ResponseInmueble[] = [];
  selectedListaInmuebles: ResponseInmueble[] = [];
  loading: boolean = false;
  @ViewChild('tableListaInmuebles') tableListaInmuebles!: Table;

  constructor(private propiedadesService: PropiedadesService, private dataUserService: DataUserService) {}

  ngOnInit(): void {
    this.inmueblesLista();
  }

  filterGlobalListaInmuebles(event: any, param: string) {
    this.tableListaInmuebles.filterGlobal(event.target.value, param);
  }

  inmueblesLista() {
    this.loading = true;
    this.propiedadesService.getInmuebles().subscribe({
      next: response => {
        if (!response.length) {
          this.loading = false;
          return;
        }

        this.listaInmuebles = response;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        console.error(err);
      },
    });
  }
}
