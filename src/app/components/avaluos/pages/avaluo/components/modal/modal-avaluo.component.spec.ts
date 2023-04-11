import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAvaluoComponent } from './modal-avaluo.component';

describe('ModalAvaluoComponent', () => {
  let component: ModalAvaluoComponent;
  let fixture: ComponentFixture<ModalAvaluoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAvaluoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAvaluoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
