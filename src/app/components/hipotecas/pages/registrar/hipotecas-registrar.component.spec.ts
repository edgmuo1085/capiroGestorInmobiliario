import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotecasRegistrarComponent } from './hipotecas-registrar.component';

describe('HipotecasRegistrarComponent', () => {
  let component: HipotecasRegistrarComponent;
  let fixture: ComponentFixture<HipotecasRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipotecasRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipotecasRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
