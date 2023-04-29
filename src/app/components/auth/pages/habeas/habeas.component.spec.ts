import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabeasComponent } from './habeas.component';

describe('HabeasComponent', () => {
  let component: HabeasComponent;
  let fixture: ComponentFixture<HabeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabeasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HabeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
