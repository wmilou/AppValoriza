import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeLogsPage } from './realtime-logs.page';

describe('RealtimeLogsPage', () => {
  let component: RealtimeLogsPage;
  let fixture: ComponentFixture<RealtimeLogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeLogsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
