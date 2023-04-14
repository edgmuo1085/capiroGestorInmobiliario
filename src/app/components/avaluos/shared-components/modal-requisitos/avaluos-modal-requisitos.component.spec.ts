import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluosModalRequisitosComponent } from './avaluos-modal-requisitos.component';

describe('AvaluosModalRequisitosComponent', () => {
  let component: AvaluosModalRequisitosComponent;
  let fixture: ComponentFixture<AvaluosModalRequisitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaluosModalRequisitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaluosModalRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
