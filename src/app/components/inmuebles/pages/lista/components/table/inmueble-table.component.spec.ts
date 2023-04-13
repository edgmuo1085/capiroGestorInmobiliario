import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleTableComponent } from './inmueble-table.component';

describe('InmuebleTableComponent', () => {
  let component: InmuebleTableComponent;
  let fixture: ComponentFixture<InmuebleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmuebleTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InmuebleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
