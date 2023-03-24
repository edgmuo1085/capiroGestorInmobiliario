import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostListener, Input, OnDestroy } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { Dropdown } from 'primeng/dropdown';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ValidatorService } from './validator.service';

@Directive({
  selector: '[appValidator]',
  exportAs: 'appValidator',
})
export class ValidatorDirective implements AfterViewInit, OnDestroy {
  @Input() formGroup: FormGroup = new FormGroup({});

  constructor(private validatorService: ValidatorService, private changeDetectorRef: ChangeDetectorRef, private elementRef: ElementRef) {}

  ngOnDestroy(): void {
    this.validatorService.clear();
  }

  ngAfterViewInit(): void {
    this.bindEvents();
  }

  bindEvents() {
    this.changeDetectorRef.detectChanges();
    this.formGroup.statusChanges.pipe(distinctUntilChanged()).subscribe(() => {
      this.formGroup.get('isInvalidForm')?.setValue(this.formGroup.invalid);
    });

    for (const id of Object.keys(this.formGroup.controls)) {
      const element = this.elementRef.nativeElement.querySelector('#' + id);
      if (element) {
        const control: any = this.formGroup.get(id);
        this.bindControl(control, id);
        this.bindBlur(element, id);
      }
    }
  }

  @HostListener('submit')
  validateControls() {
    this.changeDetectorRef.detectChanges();
    for (const id of Object.keys(this.formGroup.controls)) {
      if (id !== 'isInvalidForm') {
        this.validateControl(id);
      }
    }
  }

  validateControl(id: string) {
    this.validatorService.validateControl(this.formGroup, id, this.changeDetectorRef);
  }

  bindControl(control: AbstractControl, id: string): void {
    const self = this;
    control.valueChanges.pipe(debounceTime(250)).subscribe(() => {
      if (!control.dirty) {
        return;
      }

      setTimeout(() => self.validateControl(id));
    });
  }

  bindComponentPrimeControl(control: AbstractControl, id: string, element: Dropdown | AutoComplete, bindBlur?: boolean): void {
    if (element) {
      element.onHide.subscribe(() => {
        this.componentPrimeProcess(control, id);
      });
    }
    if (element && bindBlur) {
      element.onBlur.subscribe(() => {
        this.componentPrimeProcess(control, id);
      });
    }
  }

  componentPrimeProcess(control: AbstractControl, id: string): void {
    if (!control.dirty) {
      this.validateControl(id);
    }
    return;
  }

  bindBlur(element: HTMLElement, id: string): void {
    const self = this;
    element.addEventListener('blur', () => {
      self.validateControl(id);
    });
  }
}
