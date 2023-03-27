import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-cap-form-fielset',
  templateUrl: './cap-form-fielset.component.html',
  styleUrls: ['./cap-form-fielset.component.scss'],
})
export class CapFormFielsetComponent {
  @Input() label: string = '';
  @Input() hideError: boolean = false;
  /* @HostBinding('class') class = 'cap-error-holder'; */
}
