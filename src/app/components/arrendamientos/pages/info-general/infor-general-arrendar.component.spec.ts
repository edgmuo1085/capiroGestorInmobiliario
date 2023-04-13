import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforGeneralArrendarComponent } from './infor-general-arrendar.component';

describe('InforGeneralArrendarComponent', () => {
  let component: InforGeneralArrendarComponent;
  let fixture: ComponentFixture<InforGeneralArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InforGeneralArrendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InforGeneralArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
