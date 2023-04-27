import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ValidatorService } from '../../shared-modules/directivas/validator.service';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-cap-form-dropdown-custom',
  templateUrl: './cap-form-dropdown-custom.component.html',
  styleUrls: ['./cap-form-dropdown-custom.component.scss'],
})
export class CapFormDropdownCustomComponent {
  @Input() controlName: string = '';
  @Input() placeholder: string = '';
  @Input() listaItems: ParametrosShared[] = [];
  @Output() actionChangeSelect: EventEmitter<string> = new EventEmitter<string>();

  constructor(public validatorService: ValidatorService, public cdref: ChangeDetectorRef) {}

  actionEmit(param: string) {
    this.actionChangeSelect.emit(param);
  }
}
