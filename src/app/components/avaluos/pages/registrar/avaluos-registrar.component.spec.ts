import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluosRegistrarComponent } from './avaluos-registrar.component';

describe('AvaluosRegistrarComponent', () => {
  let component: AvaluosRegistrarComponent;
  let fixture: ComponentFixture<AvaluosRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaluosRegistrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaluosRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
