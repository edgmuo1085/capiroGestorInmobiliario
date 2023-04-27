import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { UtilsService } from './utils.service';
import { PasswordCheckerRequestShared } from '../../interfaces/password-checker-request.interface';

@Injectable({
  providedIn: 'root',
})
export class ControlsFormsValidatorsService {
  constructor(private utilsService: UtilsService) {}

  /**
   * method to validate if email in formControl is valid
   * @return {ValidatorFn} response
   */
  isValidEmail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = new RegExp('^[a-zA-Z0-9_.+-]+@([\\w-]+\\.)+[\\w-]{2,8}$');

      if (!value.test(control.value) && control.value !== '') {
        return { invalid: true };
      }

      return null;
    };
  }

  /**
   * method to validate if value is numeric
   * @return {ValidatorFn} response
   */
  isNumeric(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = /^[0-9 ]+$/;

      if (!value.test(control.value) && control.value !== '') {
        return { invalid: true };
      }

      return null;
    };
  }

  /**
   * method to know if input contains only numbers, spaces, plus, brackets
   * @return {ValidatorFn} response
   */
  isValidPhone(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = /^(?=.*\d)[- +()0-9]+$/;

      if (!value.test(control.value) && control.value !== '') {
        return { invalid: true };
      }

      return null;
    };
  }

  /**
   * method to validate if value is numeric no spaces
   * @return {ValidatorFn} response
   */
  isAlphabeticalNoSpaces(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$/g;

      if (!value.test(control.value) && control.value !== '') {
        return { invalid: true };
      }

      return null;
    };
  }

  /**
   * method to validate if value is numeric with spaces
   * @return {ValidatorFn} response
   */
  isAlphabetical(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ ]+$/g;

      if (!value.test(control.value) && control.value !== '') {
        return { invalid: true };
      }

      return null;
    };
  }

  /**
   * method to validate if value is alphanumeric
   * @return {ValidatorFn} response
   */
  isAlphanumeric(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ0-9 ]*$/;

      if (!value.test(control.value) && control.value !== '') {
        return { invalid: true };
      }

      return null;
    };
  }

  /**
   * method to validate if value is alphanumeric and special character &
   * @return {ValidatorFn} response
   */
  isAlphanumericSpecial(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const value = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ0-9& ]*$/;

      if (!value.test(control.value) && control.value !== '') {
        return { invalid: true };
      }

      return null;
    };
  }

  /**
   * method to validate if two controls are equals on value
   * @param {string} controlName
   * @return {ValidatorFn} response
   */
  areControlEquals(controlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const compareControl = control.root.get(controlName);

      if (control.value !== (compareControl ? compareControl.value : '')) {
        return { invalid: true };
      }

      return null;
    };
  }

  /**
   * valide if field is true
   * @return {ValidatorFn} response
   */
  isTrue(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value || control.value === false) {
        return { invalid: true };
      }

      return null;
    };
  }

  /**
   * validate password checker
   * @return {ValidatorFn} response
   */
  isValidPasswordChecker(field: string, passwordCheckerOptions: PasswordCheckerRequestShared): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control || !control.root.get(field)) {
        return null;
      }
      let ctrl = control.root.get(field)?.value || '';
      const validation = this.utilsService.validatePassword(ctrl, passwordCheckerOptions);
      if (!validation.valid) {
        return { passwordChecker: validation.valid };
      }

      return null;
    };
  }

  /**
   * validate min number value
   * @param {number} value
   * @return {ValidatorFn} response
   */
  min(value: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean | number } | null => {
      if (value !== null && (!control.value || control.value < value) && control.value !== '') {
        return { min: true, minValue: value };
      }

      return null;
    };
  }

  /**
   * validate min number value
   * @param {number} value
   * @return {ValidatorFn} response
   */
  max(value: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean | number } | null => {
      if (value !== null && (!control.value || control.value > value) && control.value !== '') {
        return { max: true, maxValue: value };
      }

      return null;
    };
  }

  /**
   * validate min number value
   * @param {number} value
   * @return {ValidatorFn} response
   */
  minLength(value: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value.length < value && control.value !== '') {
        return { min: true };
      }

      return null;
    };
  }

  /**
   * validate min number value
   * @param {number} value
   * @return {ValidatorFn} response
   */
  maxLength(value: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean | number } | null => {
      if (control.value?.toString()?.length > value && control.value !== '') {
        return { maxLength: true, maxValue: value };
      }

      return null;
    };
  }

  /**

  /**
   * method to validate if value is numeric with specific range
   * @param {number} min
   * @param {number} max
   * @return {ValidatorFn} response
   */
  isNumericRange(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const regex = /^[0-9 ]+$/;
      const value = parseInt(control.value + '', 10);

      if (!value || value < min || value > max || (!regex.test(control.value) && control.value !== '')) {
        return { invalid: true };
      }

      return null;
    };
  }
}
