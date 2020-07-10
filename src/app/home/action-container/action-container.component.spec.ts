import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionContainerComponent } from './action-container.component';

describe('ActionContainerComponent', () => {
  let component: ActionContainerComponent;
  let fixture: ComponentFixture<ActionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
