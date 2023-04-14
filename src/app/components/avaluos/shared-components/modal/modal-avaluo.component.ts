import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-avaluo',
  templateUrl: './modal-avaluo.component.html',
  styleUrls: ['./modal-avaluo.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalAvaluoComponent {
  @Input() visible: boolean = false;
  @Output() eventCloseDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  _eventCloseDialogModal() {
    this.eventCloseDialogModal.emit(false);
  }
}
