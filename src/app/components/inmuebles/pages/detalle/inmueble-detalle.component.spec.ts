import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleDetalleComponent } from './inmueble-detalle.component';

describe('InmuebleDetalleComponent', () => {
  let component: InmuebleDetalleComponent;
  let fixture: ComponentFixture<InmuebleDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmuebleDetalleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InmuebleDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
