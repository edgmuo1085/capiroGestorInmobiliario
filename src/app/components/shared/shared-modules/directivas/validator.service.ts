import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Dropdown } from 'primeng/dropdown';
import { AutoComplete } from 'primeng/autocomplete';
import { AbstractControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RangeValidatorShared } from 'src/app/components/interfaces/range-validator.interface';

export type Validator = (id: string) => void;

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  private dropDowns: any = new Map<string, Dropdown>();
  private autoCompleteList: any = new Map<string, AutoComplete>();
  commonErrors: string[] = [
    'invalid',
    'required',
    'min',
    'minlength',
    'max',
    'unavailable',
    'pattern',
    'maxlength',
    'expNotValidate',
    'minValue',
    'maxValue',
    'maxLength',
  ];
  customErrorsValue: string[] = ['minValue', 'maxValue'];

  constructor(private translate: TranslateService) {}

  registerDropDown(id: string, dropDown: Dropdown): void {
    this.dropDowns[id] = dropDown;
  }

  getDropDown(id: string): Dropdown {
    return this.dropDowns[id];
  }

  registerAutoComplete(id: string, autoComplete: AutoComplete): void {
    this.autoCompleteList[id] = autoComplete;
  }

  getAutoComplete(id: string): AutoComplete {
    return this.autoCompleteList[id];
  }

  validateControl(formGroup: FormGroup, id: string, changeDetectorRef?: ChangeDetectorRef): void {
    changeDetectorRef?.detectChanges();
    const control = formGroup.get(id);
    const element = document.getElementById(id);
    let parentElement = element ? element.parentElement : null;
    let divError = parentElement ? parentElement.getElementsByClassName('error') : null;

    if (divError && divError.length === 0) {
      parentElement = element ? element.closest('.cap-error-holder') : null;
      divError = parentElement ? parentElement.getElementsByClassName('error') : null;
    }

    if (!control?.errors) {
      if (!parentElement) {
        return;
      }

      parentElement?.classList.remove('cap-field-error');
      parentElement?.classList.add('cap-field-success');

      if (!divError || divError.length === 0) {
        return;
      }

      divError[0].innerHTML = '';
      return;
    }

    const errorData = this.getErrorsAndValues(control, id);
    let errores = errorData['error'].split('Dynamic')[0];
    parentElement?.classList.add('cap-field-error');
    parentElement?.classList.remove('cap-field-success');

    if (!divError || divError.length === 0) {
      return;
    }

    divError[0].innerHTML = this.translate.instant('form.error.' + errores, errorData['values']);
  }

  getErrorsAndValues(control: AbstractControl, id: string): { [key: string]: any } {
    let formError = control.errors || new FormGroup({});
    let values: RangeValidatorShared = {};
    let error = Object.keys(formError)[0];
    const errorSpecificValues = Object.values(formError)[0];
    const errorWithValue = this.customErrorsValue.find(value => Object.keys(formError).includes(value));

    if (errorSpecificValues && Object.values(errorSpecificValues).length) {
      const errorValues = Object.values(errorSpecificValues);
      values = {
        current: errorValues[1],
        expected: errorValues[0],
      };
    }

    if (errorWithValue && formError[errorWithValue]) {
      values = {
        expectedValue: formError[errorWithValue],
      };
      error = errorWithValue + '.' + id;
    }

    if (!errorWithValue) {
      error = this.commonErrors.includes(error) ? error + '.' + id : error;
    }

    return { values, error };
  }

  clear() {
    this.dropDowns.clear();
    this.autoCompleteList.clear();
  }

  scrollToSelected(cdref: ChangeDetectorRef, formData: FormGroup, controlName: string, optionsList: any[]) {
    cdref.detectChanges();
    const selected = document.getElementsByClassName('p-dropdown-item p-highlight p-ripple')[0] as HTMLElement;
    if (selected) {
      const element = document.getElementsByClassName('p-dropdown-items-wrapper')[0] as HTMLElement;
      const value = formData.get(controlName)?.value;
      const index = optionsList.findIndex(x => x.codInterno === value);
      element.scrollTop = index * selected.offsetHeight - 1;
    }
  }

  scrollToSelectedCity(cdref: ChangeDetectorRef, formData: FormGroup, controlName: string, optionsList: any[]) {
    cdref.detectChanges();
    const selected = document.getElementsByClassName('p-dropdown-item p-highlight p-ripple')[0] as HTMLElement;
    if (selected) {
      const element = document.getElementsByClassName('p-dropdown-items-wrapper')[0] as HTMLElement;
      const value = formData.get(controlName)?.value;
      const index = optionsList.findIndex(x => x.idMunicipio === value);
      element.scrollTop = index * selected.offsetHeight - 1;
    }
  }
}
