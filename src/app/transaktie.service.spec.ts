import { TestBed, inject } from '@angular/core/testing';

import { TransaktieService } from './transaktie/transaktie.service';

describe('TransaktieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransaktieService]
    });
  });

  it('should be created', inject([TransaktieService], (service: TransaktieService) => {
    expect(service).toBeTruthy();
  }));
});
