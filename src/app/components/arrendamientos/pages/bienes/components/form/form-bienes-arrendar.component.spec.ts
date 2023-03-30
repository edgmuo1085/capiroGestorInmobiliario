import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBienesArrendarComponent } from './form-bienes-arrendar.component';

describe('FormBienesArrendarComponent', () => {
  let component: FormBienesArrendarComponent;
  let fixture: ComponentFixture<FormBienesArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBienesArrendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBienesArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
