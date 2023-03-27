import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapFormFielsetComponent } from './cap-form-fielset.component';

describe('CapFormFielsetComponent', () => {
  let component: CapFormFielsetComponent;
  let fixture: ComponentFixture<CapFormFielsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapFormFielsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapFormFielsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
