import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPopperComponent } from './video-popper.component';

describe('VideoPopperComponent', () => {
  let component: VideoPopperComponent;
  let fixture: ComponentFixture<VideoPopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
