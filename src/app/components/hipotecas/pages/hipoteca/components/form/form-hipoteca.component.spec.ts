import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHipotecaComponent } from './form-hipoteca.component';

describe('FormHipotecaComponent', () => {
  let component: FormHipotecaComponent;
  let fixture: ComponentFixture<FormHipotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHipotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
