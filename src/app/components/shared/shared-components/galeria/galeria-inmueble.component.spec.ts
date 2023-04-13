import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaInmuebleComponent } from './galeria-inmueble.component';

describe('GaleriaInmuebleComponent', () => {
  let component: GaleriaInmuebleComponent;
  let fixture: ComponentFixture<GaleriaInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GaleriaInmuebleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GaleriaInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
