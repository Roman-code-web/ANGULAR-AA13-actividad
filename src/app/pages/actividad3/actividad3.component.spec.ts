import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actividad3Component } from './actividad3.component';

describe('Actividad3Component', () => {
  let component: Actividad3Component;
  let fixture: ComponentFixture<Actividad3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Actividad3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actividad3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
