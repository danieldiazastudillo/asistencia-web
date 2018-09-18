import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistAccordionComponent } from './assist-accordion.component';

describe('AssistAccordionComponent', () => {
  let component: AssistAccordionComponent;
  let fixture: ComponentFixture<AssistAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
