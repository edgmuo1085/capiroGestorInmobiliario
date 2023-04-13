import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadHipotecaComponent } from './upload-hipoteca.component';

describe('UploadHipotecaComponent', () => {
  let component: UploadHipotecaComponent;
  let fixture: ComponentFixture<UploadHipotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadHipotecaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
