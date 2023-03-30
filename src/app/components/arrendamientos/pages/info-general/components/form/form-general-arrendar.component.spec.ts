import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneralArrendarComponent } from './form-general-arrendar.component';

describe('FormGeneralArrendarComponent', () => {
  let component: FormGeneralArrendarComponent;
  let fixture: ComponentFixture<FormGeneralArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGeneralArrendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGeneralArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
