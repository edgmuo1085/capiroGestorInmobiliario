import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-avaluo-hipoteca',
  templateUrl: './modal-avaluo-hipoteca.component.html',
  styleUrls: ['./modal-avaluo-hipoteca.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalAvaluoHipotecaComponent {
  @Input() visible: boolean = false;
  @Output() eventCloseDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  _eventCloseDialogModal() {
    this.eventCloseDialogModal.emit(false);
  }
}
