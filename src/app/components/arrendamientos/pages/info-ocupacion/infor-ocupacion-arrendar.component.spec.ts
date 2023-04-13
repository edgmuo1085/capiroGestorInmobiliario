import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforOcupacionArrendarComponent } from './infor-ocupacion-arrendar.component';

describe('InforOcupacionArrendarComponent', () => {
  let component: InforOcupacionArrendarComponent;
  let fixture: ComponentFixture<InforOcupacionArrendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InforOcupacionArrendarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InforOcupacionArrendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
