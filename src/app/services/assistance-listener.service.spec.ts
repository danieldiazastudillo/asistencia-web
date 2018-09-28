import { TestBed, inject } from '@angular/core/testing';

import { AssistanceListenerService } from './assistance-listener.service';

describe('AssistanceListenerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssistanceListenerService]
    });
  });

  it('should be created', inject([AssistanceListenerService], (service: AssistanceListenerService) => {
    expect(service).toBeTruthy();
  }));
});
