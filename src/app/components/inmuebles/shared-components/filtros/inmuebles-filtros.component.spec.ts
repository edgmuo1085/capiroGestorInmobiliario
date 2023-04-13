import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesFiltrosComponent } from './inmuebles-filtros.component';

describe('InmueblesFiltrosComponent', () => {
  let component: InmueblesFiltrosComponent;
  let fixture: ComponentFixture<InmueblesFiltrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmueblesFiltrosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InmueblesFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
