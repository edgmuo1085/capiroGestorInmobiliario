import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapFormDropdownCustomComponent } from './cap-form-dropdown-custom.component';

describe('CapFormDropdownCustomComponent', () => {
  let component: CapFormDropdownCustomComponent;
  let fixture: ComponentFixture<CapFormDropdownCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapFormDropdownCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapFormDropdownCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
