import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriendoModalRequisitosComponent } from './arriendo-modal-requisitos.component';

describe('ArriendoModalRequisitosComponent', () => {
  let component: ArriendoModalRequisitosComponent;
  let fixture: ComponentFixture<ArriendoModalRequisitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArriendoModalRequisitosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArriendoModalRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
