import { TestBed, inject } from '@angular/core/testing';

import { TiobeService } from './tiobe.service';

describe('TiobeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiobeService]
    });
  });

  it('should be created', inject([TiobeService], (service: TiobeService) => {
    expect(service).toBeTruthy();
  }));
});
