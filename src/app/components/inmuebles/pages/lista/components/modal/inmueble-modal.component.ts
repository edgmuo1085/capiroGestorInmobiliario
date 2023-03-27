import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inmueble-modal',
  templateUrl: './inmueble-modal.component.html',
  styleUrls: ['./inmueble-modal.component.scss'],
})
export class InmuebleModalComponent {
  @Input() visible: boolean = false;
  @Output() eventCloseDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  showDataLogin: string = 'modal-login';
  session: string = '';

  constructor() {}

  _eventCloseDialogModal() {
    this.eventCloseDialogModal.emit(false);
    this.showDataLogin = 'modal-login';
  }

  changeComponentModal(event: any) {
    this.showDataLogin = event.modal;
    this.session = event.session;
  }
}
