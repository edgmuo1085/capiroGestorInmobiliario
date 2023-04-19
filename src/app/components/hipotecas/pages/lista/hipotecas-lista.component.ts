import { Component, OnInit } from '@angular/core';
import { ResponseAvaluoHipoteca } from 'src/app/components/interfaces/response-avaluo-hipoteca.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
@Component({
  selector: 'app-hipotecas-lista',
  templateUrl: './hipotecas-lista.component.html',
  styleUrls: ['./hipotecas-lista.component.scss'],
})
export class HipotecasListaComponent implements OnInit {
  listaHipotecas: ResponseAvaluoHipoteca[] = [];
  selectedListaHipotecas: ResponseAvaluoHipoteca[] = [];
  loading: boolean = false;
  idUsuario: number = 0;
  constructor(private propiedadesService: PropiedadesService, private dataUserService: DataUserService) {
    this.dataUserService.getUserData().subscribe(response => {
      this.idUsuario = response.idUsuario;
    });
  }

  ngOnInit(): void {
    this.getListaAvaluos();
  }

  getListaAvaluos() {
    this.loading = true;
    this.propiedadesService.listarAvaluoHipoteca().subscribe({
      next: response => {
        if (!response.length) {
          this.loading = false;
          return;
        }

        this.listaHipotecas = response.filter(item => item.tipoFormulario !== 'avaluo');
        console.log(this.listaHipotecas);
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        console.error(err);
      },
    });
  }
}
