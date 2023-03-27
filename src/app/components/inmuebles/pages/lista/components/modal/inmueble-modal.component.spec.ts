import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleModalComponent } from './inmueble-modal.component';

describe('InmuebleModalComponent', () => {
  let component: InmuebleModalComponent;
  let fixture: ComponentFixture<InmuebleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmuebleModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmuebleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
