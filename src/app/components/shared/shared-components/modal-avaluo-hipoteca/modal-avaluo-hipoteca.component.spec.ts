import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAvaluoHipotecaComponent } from './modal-avaluo-hipoteca.component';

describe('ModalAvaluoHipotecaComponent', () => {
  let component: ModalAvaluoHipotecaComponent;
  let fixture: ComponentFixture<ModalAvaluoHipotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAvaluoHipotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAvaluoHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
