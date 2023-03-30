import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReferenciasArrendarComponent } from './form-referencias-arrendar.component';

describe('FormReferenciasArrendarComponent', () => {
  let component: FormReferenciasArrendarComponent;
  let fixture: ComponentFixture<FormReferenciasArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReferenciasArrendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReferenciasArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
