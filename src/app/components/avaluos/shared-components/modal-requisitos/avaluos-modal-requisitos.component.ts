import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-avaluos-modal-requisitos',
  templateUrl: './avaluos-modal-requisitos.component.html',
  styleUrls: ['./avaluos-modal-requisitos.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AvaluosModalRequisitosComponent {
  @Input() visible: boolean = false;
  @Output() eventCloseDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  _eventCloseDialogModal() {
    this.eventCloseDialogModal.emit(false);
  }
}
