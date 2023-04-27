import { Injectable } from '@angular/core';
import { PasswordCheckerRequestShared } from '../../interfaces/password-checker-request.interface';
import { PasswordChecker } from '../../interfaces/password-checker.interface';
import { DateCustomShared } from '../../interfaces/date-custom.interface';

export const SIZE_PRICE: any = {
  4: { abb: 'K', size: 3 },
  5: { abb: 'K', size: 3 },
  6: { abb: 'K', size: 3 },
  7: { abb: 'M', size: 6 },
  8: { abb: 'M', size: 6 },
  9: { abb: 'M', size: 6 },
  10: { abb: 'T', size: 9 },
  11: { abb: 'T', size: 9 },
  12: { abb: 'T', size: 9 },
};

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  /**
   * Method to clean declared value
   * @param {string} value
   * @returns {string}
   */
  unformatCurrencyValue(value: string = ''): string {
    if (value === '.') {
      value = '0';
    }
    return this.cleanCurrency(value.toString()).replace(new RegExp(',', 'g'), '');
  }

  /**
   * pre format currency holding numbers, dots and commas
   * @param {string} value
   * @returns {string}
   */
  cleanCurrency(value: string = ''): string {
    return value.toString().replace(/[^0-9.,]/g, '');
  }

  /**
   * Method to know if a input is a number
   * @param {string} value
   * @returns {string}
   */
  isNumeric(value: string = ''): boolean {
    value = value.replace(',', '').replace('.', '');
    return /^[0-9 ]+$/.test(value.replace(/ /g, ''));
  }

  /**
   * format currency
   * @param {number} value
   * @returns {string}
   */
  formatCurrency(value: number): string {
    if (!value) {
      return '$0';
    }

    if ((value + '').includes('$')) {
      return value + '';
    }

    let response = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);

    return response;
  }

  /**
   * Convert a number into abbreviations K,M,T
   * @param {string} value
   * @returns {string}
   */
  sizeNumberShort(value: string): string {
    if (!value) {
      return '0';
    }

    if (value.length <= 3) {
      return value;
    }

    const returnData = SIZE_PRICE[value.length];
    let valorR = value.substring(0, value.length - returnData.size);

    return valorR + returnData.abb;
  }

  /**
   * Change input type password
   * @param {Event} event
   * @param {string} id
   * @returns
   */
  changeInputTypePassword(event: Event, id: string): void {
    if (!event) {
      return;
    }

    const icon = (event.target as HTMLInputElement).classList;
    const password = document.getElementById(id) as HTMLInputElement;
    password.type = password.type === 'password' ? 'text' : 'password';

    if (icon.contains('fa-eye')) {
      icon.remove('fa-eye');
      icon.add('fa-eye-slash');
      return;
    }

    icon.remove('fa-eye-slash');
    icon.add('fa-eye');
  }

  /**
   * Method to know if a password is strong
   * @param {string} passw
   * @param {PasswordCheckerRequestShared} checkParam
   * @returns {PasswordChecker}
   */
  validatePassword(passw: string, checkParam?: PasswordCheckerRequestShared): PasswordChecker {
    const params = { ...{ length: 8, moreSymbol: true, moreUpper: true, moreLower: true, moreNumber: true }, ...(checkParam || {}) };
    const symbolRegexp = /[,\.\?\$#_]/;
    const lowerRegexp = /[a-z]/;
    const upperRegexp = /[A-Z]/;
    const numberRegexp = /\d/;
    let valid = true;
    const symbol = params.moreSymbol ? symbolRegexp.test(passw) : true;
    const upper = params.moreUpper ? upperRegexp.test(passw) : true;
    const lower = params.moreLower ? lowerRegexp.test(passw) : true;
    const passwordNumber = params.moreNumber ? numberRegexp.test(passw) : true;
    const length = passw.length >= params.length;
    const score = (symbol ? 1 : 0) + (upper ? 1 : 0) + (lower ? 1 : 0) + (passwordNumber ? 1 : 0) + (length ? 1 : 0);
    valid = this.isValidPassword(params, symbol, upper, lower, passwordNumber, length);

    return {
      symbol,
      upper,
      lower,
      passwordNumber,
      length,
      valid,
      strength: Math.round((score / 5) * 100),
    };
  }

  /**
   * Method to know if a password meets the requirements
   * @param { [key: string]: any } params
   * @param {boolean} symbol
   * @param {boolean} upper
   * @param {boolean} lower
   * @param {boolean} passwordNumber
   * @param {boolean} length
   * @returns {boolean}
   */
  isValidPassword(
    params: { [key: string]: any },
    symbol: boolean,
    upper: boolean,
    lower: boolean,
    passwordNumber: boolean,
    length: boolean
  ): boolean {
    if (
      (params['moreSymbol'] && !symbol) ||
      (params['moreUpper'] && !upper) ||
      (params['moreLower'] && !lower) ||
      (params['moreNumber'] && !passwordNumber) ||
      !length
    ) {
      return false;
    }
    return true;
  }

  /**
   * Method that returns date and time separately
   * @param {string} value
   * @param {string} format
   * @returns {DateCustomShared}
   */
  getDateAndTime(value: string, format?: string): DateCustomShared {
    let date = new Date(value);
    if (!value) {
      date = new Date();
    }
    const startDate = this.getFormatDate(date, format ? format : 'dd/mm/yyyy');
    const startTime = `${this.twoDigitDate(date.getHours())}:${this.twoDigitDate(date.getMinutes())}:${this.twoDigitDate(
      date.getSeconds()
    )}`;

    return {
      startDate,
      startTime,
    };
  }

  /**
   * Method that returns the formatted time
   * @param {number} value
   * @returns {string}
   */
  twoDigitDate(value: number | string): string {
    let digitos = +value < 10 ? '0' : '';
    return digitos + value.toString();
  }

  /**
   * Method that returns a date formatted according to a received parameter
   * @param {Date} date
   * @param {string} format
   * @returns {string}
   */
  getFormatDate(date: Date, format: string): string {
    const DATE_FORMAT: any = {
      'mm/dd/yyyy': `${this.twoDigitDate(date.getMonth() + 1)}/${this.twoDigitDate(date.getDate())}/${date.getFullYear()}`,
      'dd/mm/yyyy': `${this.twoDigitDate(date.getDate())}/${this.twoDigitDate(date.getMonth() + 1)}/${date.getFullYear()}`,
      'yyyy/mm/dd': `${date.getFullYear()}/${this.twoDigitDate(date.getMonth() + 1)}/${this.twoDigitDate(date.getDate())}`,
      'yyyy-mm-dd': `${date.getFullYear()}-${this.twoDigitDate(date.getMonth() + 1)}-${this.twoDigitDate(date.getDate())}`,
    };

    return DATE_FORMAT[format];
  }

  /**
   * Method that takes time
   * @param timeValue {number}
   * @returns {Promise<void>}
   */
  async takeTime(timeValue: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, timeValue));
  }
}
