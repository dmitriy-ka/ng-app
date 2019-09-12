import { TestBed } from '@angular/core/testing';

import { NgxTourService } from './ngx-tour.service';

describe('NgxTourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxTourService = TestBed.get(NgxTourService);
    expect(service).toBeTruthy();
  });
});
