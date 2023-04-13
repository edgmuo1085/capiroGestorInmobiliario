import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInmuebleComponent } from './modal-inmueble.component';

describe('ModalInmuebleComponent', () => {
  let component: ModalInmuebleComponent;
  let fixture: ComponentFixture<ModalInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalInmuebleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
