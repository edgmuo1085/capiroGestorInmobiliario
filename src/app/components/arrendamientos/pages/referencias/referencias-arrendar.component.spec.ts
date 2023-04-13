import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasArrendarComponent } from './referencias-arrendar.component';

describe('ReferenciasArrendarComponent', () => {
  let component: ReferenciasArrendarComponent;
  let fixture: ComponentFixture<ReferenciasArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReferenciasArrendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReferenciasArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
