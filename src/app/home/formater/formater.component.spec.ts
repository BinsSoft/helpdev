import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaterComponent } from './formater.component';

describe('FormaterComponent', () => {
  let component: FormaterComponent;
  let fixture: ComponentFixture<FormaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
