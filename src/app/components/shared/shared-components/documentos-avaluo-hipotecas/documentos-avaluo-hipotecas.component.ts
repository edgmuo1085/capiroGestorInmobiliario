import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-documentos-avaluo-hipotecas',
  templateUrl: './documentos-avaluo-hipotecas.component.html',
  styleUrls: ['./documentos-avaluo-hipotecas.component.scss'],
})
export class DocumentosAvaluoHipotecasComponent {
  @Input() idUsuario: number = 0;
  @Input() idAvaluo: number = 0;
  @Input() nombresFields: string[] = [];
}
