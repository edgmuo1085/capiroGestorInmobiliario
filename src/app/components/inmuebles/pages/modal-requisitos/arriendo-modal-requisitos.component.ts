import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-arriendo-modal-requisitos',
  templateUrl: './arriendo-modal-requisitos.component.html',
  styleUrls: ['./arriendo-modal-requisitos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArriendoModalRequisitosComponent {
  @Input() visible: boolean = false;
  @Output() eventCloseDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  _eventCloseDialogModal() {
    this.eventCloseDialogModal.emit(false);
  }
}
