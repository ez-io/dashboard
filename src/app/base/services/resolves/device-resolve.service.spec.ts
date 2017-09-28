import { TestBed, inject } from '@angular/core/testing';

import { DeviceResolveService } from './device-resolve.service';

describe('DeviceResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceResolveService]
    });
  });

  it('should ...', inject([DeviceResolveService], (service: DeviceResolveService) => {
    expect(service).toBeTruthy();
  }));
});
