import { TestBed, inject } from '@angular/core/testing';

import { ModuleResolveService } from './module-resolve.service';

describe('ModuleResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleResolveService]
    });
  });

  it('should ...', inject([ModuleResolveService], (service: ModuleResolveService) => {
    expect(service).toBeTruthy();
  }));
});
