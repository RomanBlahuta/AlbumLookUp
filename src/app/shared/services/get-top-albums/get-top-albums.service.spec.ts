import { TestBed } from '@angular/core/testing';

import { GetTopAlbumsService } from './get-top-albums.service';

describe('GetTopAlbumsService', () => {
  let service: GetTopAlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTopAlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
