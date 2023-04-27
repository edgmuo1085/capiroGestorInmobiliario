import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidatorService } from '../../shared-modules/directivas/validator.service';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-cap-form-dropdown',
  templateUrl: './cap-form-dropdown.component.html',
  styleUrls: ['./cap-form-dropdown.component.scss'],
})
export class CapFormDropdownComponent {
  @Input() formData: FormGroup = new FormGroup({});
  @Input() controlName: string = '';
  @Input() required: boolean = true;
  @Input() placeholder: string = '';
  @Input() listaItems: ParametrosShared[] = [];

  constructor(public validatorService: ValidatorService, public cdref: ChangeDetectorRef) {}
}
