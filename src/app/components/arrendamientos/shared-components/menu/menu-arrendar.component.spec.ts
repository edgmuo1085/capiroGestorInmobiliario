import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuArrendarComponent } from './menu-arrendar.component';

describe('MenuArrendarComponent', () => {
  let component: MenuArrendarComponent;
  let fixture: ComponentFixture<MenuArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuArrendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
