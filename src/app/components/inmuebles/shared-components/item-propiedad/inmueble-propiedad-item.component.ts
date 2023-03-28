import { Component, Input, OnInit } from '@angular/core';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { DataUserService } from 'src/app/components/shared/shared-services/data-user.service';

@Component({
  selector: 'app-inmueble-propiedad-item',
  templateUrl: './inmueble-propiedad-item.component.html',
  styleUrls: ['./inmueble-propiedad-item.component.scss'],
})
export class InmueblePropiedadItemComponent implements OnInit {
  @Input() inmublePropiedad: ResponseInmueble = {} as ResponseInmueble;
  isLogging: string = '';

  constructor(private dataUserService: DataUserService) {
    this.isLogging = this.dataUserService.enableToken() ? '/sesion' : '';
  }

  ngOnInit(): void {}
}
