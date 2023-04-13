import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotecasFormComponent } from './hipotecas-form.component';

describe('HipotecasFormComponent', () => {
  let component: HipotecasFormComponent;
  let fixture: ComponentFixture<HipotecasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HipotecasFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HipotecasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
