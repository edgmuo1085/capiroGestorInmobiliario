import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cap-modal-confirmacion',
  templateUrl: './cap-modal-confirmacion.component.html',
  styleUrls: ['./cap-modal-confirmacion.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CapModalConfirmacionComponent {
  @Input() title: string = '';
  @Input() key: string = '';
  @Input() icon: string = 'pi-exclamation-triangle';
}
