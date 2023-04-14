import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluosTableComponent } from './avaluos-table.component';

describe('AvaluosTableComponent', () => {
  let component: AvaluosTableComponent;
  let fixture: ComponentFixture<AvaluosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaluosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaluosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
