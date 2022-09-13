import { TestBed } from '@angular/core/testing';

import { Functionalities } from './functionalities.service';

describe('Functionalities', () => {
  let service: Functionalities;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Functionalities);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
