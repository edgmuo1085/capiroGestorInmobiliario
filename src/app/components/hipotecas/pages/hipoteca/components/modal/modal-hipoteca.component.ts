import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-modal-hipoteca',
  templateUrl: './modal-hipoteca.component.html',
  styleUrls: ['./modal-hipoteca.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalHipotecaComponent {
  @Input() visible: boolean = false;
  @Output() eventCloseDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  _eventCloseDialogModal() {
    this.eventCloseDialogModal.emit(false);
  }
}
