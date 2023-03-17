import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapModalConfirmacionComponent } from './cap-modal-confirmacion.component';

describe('CapModalConfirmacionComponent', () => {
  let component: CapModalConfirmacionComponent;
  let fixture: ComponentFixture<CapModalConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapModalConfirmacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapModalConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
