import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleSubirArchivosComponent } from './inmueble-subir-archivos.component';

describe('InmuebleSubirArchivosComponent', () => {
  let component: InmuebleSubirArchivosComponent;
  let fixture: ComponentFixture<InmuebleSubirArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmuebleSubirArchivosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InmuebleSubirArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
