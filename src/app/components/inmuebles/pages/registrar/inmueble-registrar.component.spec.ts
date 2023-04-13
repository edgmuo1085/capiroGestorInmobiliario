import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleRegistrarComponent } from './inmueble-registrar.component';

describe('InmuebleRegistrarComponent', () => {
  let component: InmuebleRegistrarComponent;
  let fixture: ComponentFixture<InmuebleRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmuebleRegistrarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InmuebleRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
