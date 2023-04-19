import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosAvaluoHipotecaComponent } from './documentos-avaluo-hipoteca.component';

describe('DocumentosAvaluoHipotecaComponent', () => {
  let component: DocumentosAvaluoHipotecaComponent;
  let fixture: ComponentFixture<DocumentosAvaluoHipotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosAvaluoHipotecaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosAvaluoHipotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
