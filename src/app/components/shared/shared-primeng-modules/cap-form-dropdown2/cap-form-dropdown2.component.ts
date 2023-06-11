import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorService } from '../../shared-modules/directivas/validator.service';


@Component({
  selector: 'app-cap-form-dropdown2',
  templateUrl: './cap-form-dropdown2.component.html',
  styleUrls: ['./cap-form-dropdown2.component.scss'],
})
export class CapFormDropdown2Component {
  @Input() formData: FormGroup = new FormGroup({});
  @Input() controlName: string = '';
  @Input() placeholder: string = '';
  @Input() listaItems: String[] = [];
  @Output() actionChangeSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor(public validatorService: ValidatorService, public cdref: ChangeDetectorRef) {}

  actionEmit(param: string) {
    this.actionChangeSelect.emit(param);
  }
}
