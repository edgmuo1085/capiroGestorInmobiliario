import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAvaluoComponent } from './upload-avaluo.component';

describe('UploadAvaluoComponent', () => {
  let component: UploadAvaluoComponent;
  let fixture: ComponentFixture<UploadAvaluoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadAvaluoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadAvaluoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
