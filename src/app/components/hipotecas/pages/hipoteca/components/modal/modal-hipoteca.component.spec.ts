import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHipotecaComponent } from './modal-hipoteca.component';

describe('ModalHipotecaComponent', () => {
  let component: ModalHipotecaComponent;
  let fixture: ComponentFixture<ModalHipotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHipotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
