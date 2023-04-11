import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-ubicacion',
  templateUrl: './home-ubicacion.component.html',
  styleUrls: ['./home-ubicacion.component.scss'],
})
export class HomeUbicacionComponent implements OnInit {
  rutaUbicacionCapiro: string = '';
  mostraMapa: boolean = environment.production;

  constructor() {}

  ngOnInit(): void {
    this.rutaUbicacionCapiro =
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d247.98423423577066!2d-75.43183423905423!3d6.029319154276937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4697f3cc3610ff%3A0x4fa7c827fe657e10!2sArrendamientos%20Capiro!5e0!3m2!1ses!2sco!4v1679286465133!5m2!1ses!2sco';
  }
}
