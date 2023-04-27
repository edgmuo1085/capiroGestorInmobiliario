import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapFormInputComponent } from './cap-form-input.component';

describe('CapFormInputComponent', () => {
  let component: CapFormInputComponent;
  let fixture: ComponentFixture<CapFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapFormInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
