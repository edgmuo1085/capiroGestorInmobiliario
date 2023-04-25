import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentosAvaluoHipotecasComponent } from './documentos-avaluo-hipotecas.component';

describe('DocumentosAvaluoHipotecasComponent', () => {
  let component: DocumentosAvaluoHipotecasComponent;
  let fixture: ComponentFixture<DocumentosAvaluoHipotecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentosAvaluoHipotecasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentosAvaluoHipotecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
