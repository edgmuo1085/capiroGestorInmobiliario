import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropiedadesService } from 'src/app/components/shared/shared-services/propiedades.service';
//import { saveAs } from 'file-saver';

@Component({
  selector: 'app-propiedades-arriendo',
  templateUrl: './propiedades-arriendo.component.html',
  styleUrls: ['./propiedades-arriendo.component.scss'],
})
export class PropiedadesArriendoComponent implements OnInit {
  propiedades: any[] = [];
  filtroHab!: any;
  filtroPre!: any;
  filtroEstado!: any;
  filtroTipo!: any;
  display: boolean = false;

  constructor(private router: Router, private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.showPropiedades();
  }

  showPropiedades() {
    this.propiedadesService.arriendoPropiedades().subscribe(resp => {
      this.propiedades = [resp];
      console.log(this.propiedades);
    });
  }

  showForm() {
    this.router.navigateByUrl('propiedadArrendo');
    console.log('ingresa');
  }

  limpiarFiltros() {
    (this.filtroHab = ''), (this.filtroPre = ''), (this.filtroEstado = ''), (this.filtroTipo = '');
  }

  showDialog() {
    this.display = true;
  }

  downloadImg(url: any, name: any) {
    //saveAs(url, name + '.png');
  }
}
