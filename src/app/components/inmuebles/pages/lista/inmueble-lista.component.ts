import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  idUsuario: number = 0;

  constructor(private propiedadesService: PropiedadesService, private dataUserService: DataUserService, private router: Router) {
    this.dataUserService.getUserData().subscribe(response => {
      this.idUsuario = response.idUsuario;
    });
  }

  ngOnInit(): void {
    this.getListaInmuebles();
  }

  getListaInmuebles() {
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

  actualizarListaGeneral(event: boolean) {
    if (event) {
      this.getListaInmuebles();
    }
  }
}
