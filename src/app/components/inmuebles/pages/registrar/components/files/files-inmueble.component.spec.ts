import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesInmuebleComponent } from './files-inmueble.component';

describe('FilesInmuebleComponent', () => {
  let component: FilesInmuebleComponent;
  let fixture: ComponentFixture<FilesInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
