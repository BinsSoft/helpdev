import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodedecodeComponent } from './encodedecode.component';

describe('EncodedecodeComponent', () => {
  let component: EncodedecodeComponent;
  let fixture: ComponentFixture<EncodedecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncodedecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncodedecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
