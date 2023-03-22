import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleFormComponent } from './inmueble-form.component';

describe('InmuebleFormComponent', () => {
  let component: InmuebleFormComponent;
  let fixture: ComponentFixture<InmuebleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InmuebleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InmuebleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
