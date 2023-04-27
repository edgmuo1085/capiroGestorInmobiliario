import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapFormDropdownComponent } from './cap-form-dropdown.component';

describe('CapFormDropdownComponent', () => {
  let component: CapFormDropdownComponent;
  let fixture: ComponentFixture<CapFormDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapFormDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapFormDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
