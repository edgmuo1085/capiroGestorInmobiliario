import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesArriendoComponent } from './propiedades-arriendo.component';

describe('PropiedadesArriendoComponent', () => {
  let component: PropiedadesArriendoComponent;
  let fixture: ComponentFixture<PropiedadesArriendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropiedadesArriendoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PropiedadesArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
