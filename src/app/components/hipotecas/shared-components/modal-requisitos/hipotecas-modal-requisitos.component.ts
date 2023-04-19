import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hipotecas-modal-requisitos',
  templateUrl: './hipotecas-modal-requisitos.component.html',
  styleUrls: ['./hipotecas-modal-requisitos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HipotecasModalRequisitosComponent {
  @Input() visible: boolean = false;
  @Output() eventCloseDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  _eventCloseDialogModal() {
    this.eventCloseDialogModal.emit(false);
  }
}
