import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapFormDropdown2Component } from './cap-form-dropdown2.component';

describe('CapFormDropdown2Component', () => {
  let component: CapFormDropdown2Component;
  let fixture: ComponentFixture<CapFormDropdown2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapFormDropdown2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(CapFormDropdown2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
