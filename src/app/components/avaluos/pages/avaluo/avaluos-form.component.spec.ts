import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluosFormComponent } from './avaluos-form.component';

describe('AvaluosFormComponent', () => {
  let component: AvaluosFormComponent;
  let fixture: ComponentFixture<AvaluosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvaluosFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AvaluosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
