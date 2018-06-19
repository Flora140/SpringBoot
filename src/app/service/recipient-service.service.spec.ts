import { TestBed, inject } from '@angular/core/testing';

import { RecipientServiceService } from './recipient-service.service';

describe('RecipientServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipientServiceService]
    });
  });

  it('should be created', inject([RecipientServiceService], (service: RecipientServiceService) => {
    expect(service).toBeTruthy();
  }));
});
