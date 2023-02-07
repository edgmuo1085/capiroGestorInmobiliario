import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesVentasComponent } from './propiedades-ventas.component';

describe('PropiedadesVentasComponent', () => {
  let component: PropiedadesVentasComponent;
  let fixture: ComponentFixture<PropiedadesVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadesVentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropiedadesVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
