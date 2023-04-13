import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienesArrendarComponent } from './bienes-arrendar.component';

describe('BienesArrendarComponent', () => {
  let component: BienesArrendarComponent;
  let fixture: ComponentFixture<BienesArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BienesArrendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BienesArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
