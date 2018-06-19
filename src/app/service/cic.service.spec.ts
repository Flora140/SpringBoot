import { TestBed, inject } from '@angular/core/testing';

import { CicService } from './cic.service';

describe('CicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CicService]
    });
  });

  it('should be created', inject([CicService], (service: CicService) => {
    expect(service).toBeTruthy();
  }));
});
