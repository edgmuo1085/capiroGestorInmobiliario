import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUbicacionComponent } from './home-ubicacion.component';

describe('HomeUbicacionComponent', () => {
  let component: HomeUbicacionComponent;
  let fixture: ComponentFixture<HomeUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeUbicacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
