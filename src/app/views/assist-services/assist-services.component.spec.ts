import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistServicesComponent } from './assist-services.component';

describe('AssistServicesComponent', () => {
  let component: AssistServicesComponent;
  let fixture: ComponentFixture<AssistServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssistServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
