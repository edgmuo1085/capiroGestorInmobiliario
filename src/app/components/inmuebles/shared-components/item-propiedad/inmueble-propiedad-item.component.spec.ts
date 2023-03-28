import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblePropiedadItemComponent } from './inmueble-propiedad-item.component';

describe('InmueblePropiedadItemComponent', () => {
  let component: InmueblePropiedadItemComponent;
  let fixture: ComponentFixture<InmueblePropiedadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmueblePropiedadItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmueblePropiedadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
