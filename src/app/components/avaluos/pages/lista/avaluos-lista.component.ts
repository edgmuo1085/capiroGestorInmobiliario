import { Component, OnInit } from '@angular/core';
import { ResponseAvaluoHipoteca } from 'src/app/components/interfaces/response-avaluo-hipoteca.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';
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

        this.listaAvaluos = response.filter(item => item.tipoFormulario !== 'hipoteca');
        console.log(this.listaAvaluos);
        this.loading = false;
      },
      error: err => {
        this.loading = false;
        console.error(err);
      },
    });
  }
}
