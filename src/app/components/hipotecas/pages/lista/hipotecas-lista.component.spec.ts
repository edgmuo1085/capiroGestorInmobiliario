import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotecasListaComponent } from './hipotecas-lista.component';

describe('HipotecasListaComponent', () => {
  let component: HipotecasListaComponent;
  let fixture: ComponentFixture<HipotecasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipotecasListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipotecasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
