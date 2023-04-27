import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UtilsService } from '../../shared-services/utils.service';
import { ValidatorService } from '../../shared-modules/directivas/validator.service';

@Component({
  selector: 'app-cap-form-input',
  templateUrl: './cap-form-input.component.html',
  styleUrls: ['./cap-form-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapFormInputComponent {
  @Input() formData: FormGroup = new FormGroup({});
  @Input() controlName: string = '';
  @Input() required: boolean = true;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() showPass: boolean = false;
  @Input() maxLenght: string = '100';

  constructor(private utilsService: UtilsService, public validatorService: ValidatorService, public cdref: ChangeDetectorRef) {}

  changeInputType(event: Event, id: string) {
    this.utilsService.changeInputTypePassword(event, id);
  }

  isInvalidControl() {
    let validacion1 = this.formData.controls[this.controlName].touched;
    let validacion2 = this.formData.controls[this.controlName].errors;
    return validacion1 && validacion2;
  }
}
