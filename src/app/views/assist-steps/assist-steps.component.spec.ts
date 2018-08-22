import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistStepsComponent } from './assist-steps.component';

describe('AssistStepsComponent', () => {
  let component: AssistStepsComponent;
  let fixture: ComponentFixture<AssistStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
