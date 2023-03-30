import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderArrendarComponent } from './header-arrendar.component';

describe('HeaderArrendarComponent', () => {
  let component: HeaderArrendarComponent;
  let fixture: ComponentFixture<HeaderArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderArrendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
