import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesVentaComponent } from './propiedades-venta.component';

describe('PropiedadesVentaComponent', () => {
  let component: PropiedadesVentaComponent;
  let fixture: ComponentFixture<PropiedadesVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropiedadesVentaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PropiedadesVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
