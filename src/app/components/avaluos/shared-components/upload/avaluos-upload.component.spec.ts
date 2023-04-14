import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluosUploadComponent } from './avaluos-upload.component';

describe('AvaluosUploadComponent', () => {
  let component: AvaluosUploadComponent;
  let fixture: ComponentFixture<AvaluosUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaluosUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaluosUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
