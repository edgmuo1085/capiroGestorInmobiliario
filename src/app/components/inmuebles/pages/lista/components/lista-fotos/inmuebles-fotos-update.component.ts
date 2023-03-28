import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ResponseArchivo } from 'src/app/components/interfaces/respose-archivo.interface';

@Component({
  selector: 'app-inmuebles-fotos-update',
  templateUrl: './inmuebles-fotos-update.component.html',
  styleUrls: ['./inmuebles-fotos-update.component.scss'],
})
export class InmueblesFotosUpdateComponent {
  @Output() actionGuardarImg: EventEmitter<any> = new EventEmitter<any>();
  @Input() listaFotos: ResponseArchivo[] = [];

  actualizarImg(event: any, foto: ResponseArchivo) {
    this.actionGuardarImg.emit({ upload: event, foto: foto });
  }
}
