import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesInmuebleComponent } from './images-inmueble.component';

describe('ImagesInmuebleComponent', () => {
  let component: ImagesInmuebleComponent;
  let fixture: ComponentFixture<ImagesInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
