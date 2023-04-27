import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapFormInputCurrencyComponent } from './cap-form-input-currency.component';

describe('CapFormInputCurrencyComponent', () => {
  let component: CapFormInputCurrencyComponent;
  let fixture: ComponentFixture<CapFormInputCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapFormInputCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapFormInputCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
