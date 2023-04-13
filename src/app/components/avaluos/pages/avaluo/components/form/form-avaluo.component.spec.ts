import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAvaluoComponent } from './form-avaluo.component';

describe('FormAvaluoComponent', () => {
  let component: FormAvaluoComponent;
  let fixture: ComponentFixture<FormAvaluoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAvaluoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormAvaluoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
