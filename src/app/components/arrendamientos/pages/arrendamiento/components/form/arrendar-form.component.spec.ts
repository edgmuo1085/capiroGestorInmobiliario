import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrendarFormComponent } from './arrendar-form.component';

describe('ArrendarFormComponent', () => {
  let component: ArrendarFormComponent;
  let fixture: ComponentFixture<ArrendarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrendarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrendarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
