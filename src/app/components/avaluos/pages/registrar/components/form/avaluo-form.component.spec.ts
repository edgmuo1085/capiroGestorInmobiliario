import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluoFormComponent } from './avaluo-form.component';

describe('AvaluoFormComponent', () => {
  let component: AvaluoFormComponent;
  let fixture: ComponentFixture<AvaluoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaluoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaluoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
