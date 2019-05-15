import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlePage } from './controle.page';
import { from } from 'rxjs';

describe('ControlePage', () => {
  let component: ControlePage;
  let fixture: ComponentFixture<ControlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
