import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluosMenuComponent } from './avaluos-menu.component';

describe('AvaluosMenuComponent', () => {
  let component: AvaluosMenuComponent;
  let fixture: ComponentFixture<AvaluosMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaluosMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaluosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
