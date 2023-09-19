import { TestBed } from '@angular/core/testing';

import { PostDataShareService } from './post-data-share.service';

describe('PostDataShareService', () => {
  let service: PostDataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
