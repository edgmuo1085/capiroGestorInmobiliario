import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestacasosComponent } from './destacasos.component';

describe('DestacasosComponent', () => {
  let component: DestacasosComponent;
  let fixture: ComponentFixture<DestacasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestacasosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestacasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
