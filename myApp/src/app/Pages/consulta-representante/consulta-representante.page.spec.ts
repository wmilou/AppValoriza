import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRepresentantePage } from './consulta-representante.page';

describe('ConsultaRepresentantePage', () => {
  let component: ConsultaRepresentantePage;
  let fixture: ComponentFixture<ConsultaRepresentantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaRepresentantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRepresentantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
