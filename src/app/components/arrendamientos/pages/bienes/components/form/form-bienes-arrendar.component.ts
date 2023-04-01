import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-bienes-arrendar',
  templateUrl: './form-bienes-arrendar.component.html',
  styleUrls: ['./form-bienes-arrendar.component.scss'],
})
export class FormBienesArrendarComponent {
  @Input() formBienes: FormGroup = new FormGroup({});
  @Output() actionGuardarForm: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  get formCtrlB() {
    return this.formBienes.controls;
  }

  onSubmitReferencias() {
    this.actionGuardarForm.emit();
  }
}
