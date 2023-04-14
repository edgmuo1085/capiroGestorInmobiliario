import { Component, OnInit } from '@angular/core';
import { ResponseAvaluoHipoteca } from 'src/app/components/interfaces/response-avaluo-hipoteca.interface';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';

@Component({
  selector: 'app-avaluos-lista',
  templateUrl: './avaluos-lista.component.html',
  styleUrls: ['./avaluos-lista.component.scss'],
})
export class AvaluosListaComponent implements OnInit {
  listaAvaluos: ResponseAvaluoHipoteca[] = [];
  selectedListaAvaluos: ResponseAvaluoHipoteca[] = [];
  loading: boolean = false;
  idUsuario: number = 0;
  constructor(private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.getListaAvaluos();
  }

  getListaAvaluos() {
    this.loading = true;
    this.propiedadesService.listarAvaluoHipoteca().subscribe({
      next: response => {
        console.log(response);

        if (!response.length) {
          this.loading = false;
          return;
        }

        this.listaAvaluos = response;
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        console.error(err);
      },
    });
  }
}
