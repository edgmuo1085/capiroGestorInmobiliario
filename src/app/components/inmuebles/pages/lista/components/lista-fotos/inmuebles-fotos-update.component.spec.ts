import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesFotosUpdateComponent } from './inmuebles-fotos-update.component';

describe('InmueblesFotosUpdateComponent', () => {
  let component: InmueblesFotosUpdateComponent;
  let fixture: ComponentFixture<InmueblesFotosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmueblesFotosUpdateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InmueblesFotosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
