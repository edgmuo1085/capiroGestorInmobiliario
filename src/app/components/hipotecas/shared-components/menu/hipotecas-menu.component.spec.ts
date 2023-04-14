import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipotecasMenuComponent } from './hipotecas-menu.component';

describe('HipotecasMenuComponent', () => {
  let component: HipotecasMenuComponent;
  let fixture: ComponentFixture<HipotecasMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipotecasMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HipotecasMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
