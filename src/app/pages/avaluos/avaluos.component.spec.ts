import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluosComponent } from './avaluos.component';

describe('AvaluosComponent', () => {
  let component: AvaluosComponent;
  let fixture: ComponentFixture<AvaluosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvaluosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvaluosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
