import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOcupacionArrendarComponent } from './form-ocupacion-arrendar.component';

describe('FormOcupacionArrendarComponent', () => {
  let component: FormOcupacionArrendarComponent;
  let fixture: ComponentFixture<FormOcupacionArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormOcupacionArrendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormOcupacionArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
