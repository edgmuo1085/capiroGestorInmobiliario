import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';
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
  visible: boolean = false;
  showUpload: boolean = false;
  idUsuario: number = 0;
  idInmueble: number = 0;
  sizeFotos: number = 0;
  listaImages: ResponseArchivo[] = [];
  @ViewChild('tableListaInmuebles') tableListaInmuebles!: Table;

  constructor(private propiedadesService: PropiedadesService, private dataUserService: DataUserService, private router: Router) {
    this.dataUserService.getUserData().subscribe(response => {
      this.idUsuario = response.idUsuario;
    });
  }

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
        console.log('getInmuebles: ', response);
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

  closeModalUpload(event: any) {
    this.visible = event;
    if (this.showUpload) {
      this.inmueblesLista();
    }
    this.showUpload = false;
  }

  mostrarImg(event: ResponseInmueble) {
    this.visible = true;
    this.showUpload = false;
    this.router.navigate(['/inmuebles/sesion/detalle/', event.id]);
  }

  subirImg(inmueble: ResponseInmueble) {
    this.idInmueble = inmueble.id;
    this.sizeFotos = 3 - inmueble.fotos.length;
    this.visible = true;
    this.showUpload = true;
  }
}
