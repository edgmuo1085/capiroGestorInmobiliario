import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotecasModalRequisitosComponent } from './hipotecas-modal-requisitos.component';

describe('HipotecasModalRequisitosComponent', () => {
  let component: HipotecasModalRequisitosComponent;
  let fixture: ComponentFixture<HipotecasModalRequisitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipotecasModalRequisitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipotecasModalRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
