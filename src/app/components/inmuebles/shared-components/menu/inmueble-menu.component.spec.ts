import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleMenuComponent } from './inmueble-menu.component';

describe('InmuebleMenuComponent', () => {
  let component: InmuebleMenuComponent;
  let fixture: ComponentFixture<InmuebleMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmuebleMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InmuebleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
