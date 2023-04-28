import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-bienes-arrendar',
  templateUrl: './form-bienes-arrendar.component.html',
  styleUrls: ['./form-bienes-arrendar.component.scss'],
})
export class FormBienesArrendarComponent {
  @Input() formBienes: FormGroup = new FormGroup({});
  @Input() loading: boolean = false;
  @Output() actionGuardarForm: EventEmitter<any> = new EventEmitter<any>();
  @Output() actionPrevPage: EventEmitter<any> = new EventEmitter<any>();

  get formCtrlB() {
    return this.formBienes.controls;
  }

  onSubmitReferencias() {
    this.actionGuardarForm.emit();
  }

  btnAtras() {
    this.actionPrevPage.emit();
  }
}
