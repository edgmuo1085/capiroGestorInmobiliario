import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotecasTableComponent } from './hipotecas-table.component';

describe('HipotecasTableComponent', () => {
  let component: HipotecasTableComponent;
  let fixture: ComponentFixture<HipotecasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipotecasTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipotecasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
