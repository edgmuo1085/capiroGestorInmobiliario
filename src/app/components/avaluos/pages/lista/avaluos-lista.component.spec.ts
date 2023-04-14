import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluosListaComponent } from './avaluos-lista.component';

describe('AvaluosListaComponent', () => {
  let component: AvaluosListaComponent;
  let fixture: ComponentFixture<AvaluosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaluosListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaluosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
