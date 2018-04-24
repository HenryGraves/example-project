import { TestBed, inject } from '@angular/core/testing';

import { DataPushService } from './data-push.service';

describe('DataPushService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPushService]
    });
  });

  it('should be created', inject([DataPushService], (service: DataPushService) => {
    expect(service).toBeTruthy();
  }));
});
