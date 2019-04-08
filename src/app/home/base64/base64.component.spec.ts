import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64Component } from './base64.component';

describe('Base64Component', () => {
  let component: Base64Component;
  let fixture: ComponentFixture<Base64Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
