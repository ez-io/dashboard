import { TestBed, inject } from '@angular/core/testing';

import { ModulesResolveService } from './modules-resolve.service';

describe('ModulesResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModulesResolveService]
    });
  });

  it('should ...', inject([ModulesResolveService], (service: ModulesResolveService) => {
    expect(service).toBeTruthy();
  }));
});
