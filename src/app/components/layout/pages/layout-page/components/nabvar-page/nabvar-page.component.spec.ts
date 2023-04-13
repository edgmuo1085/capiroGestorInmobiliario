import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabvarPageComponent } from './nabvar-page.component';

describe('NabvarPageComponent', () => {
  let component: NabvarPageComponent;
  let fixture: ComponentFixture<NabvarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NabvarPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NabvarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
