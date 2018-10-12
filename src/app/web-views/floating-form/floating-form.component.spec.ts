import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingFormComponent } from './floating-form.component';

describe('FloatingFormComponent', () => {
  let component: FloatingFormComponent;
  let fixture: ComponentFixture<FloatingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
