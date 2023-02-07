
import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from 'src/app/Services/propiedades.service';

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-propiedades-ventas',
  templateUrl: './propiedades-ventas.component.html',
  styleUrls: ['./propiedades-ventas.component.css']
})
export class PropiedadesVentasComponent implements OnInit {

  propiedades:any[] = [];
  filtroHab!:any;
  filtroPre!:any;
  filtroEstado!:any;
  filtroTipo!:any;
  display:boolean = false

  constructor(private propiedadesService: PropiedadesService) { }

  ngOnInit(): void {
    this.showPropiedades();
  }

  showPropiedades(){
    this.propiedadesService.ventaPropiedades().subscribe( resp => {
      this.propiedades = [resp]
      console.log(this.propiedades);
    })
  }

  limpiarFiltros() {
    this.filtroHab = "",
    this.filtroPre = "",
    this.filtroEstado = "",
    this.filtroTipo = ""
  }

  showDialog() {
    this.display = true;
  }

  downloadImg(url:any,name:any){
    saveAs(url, name+'.png');
  }

}
