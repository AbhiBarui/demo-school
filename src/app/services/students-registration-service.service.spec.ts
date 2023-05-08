import { TestBed } from '@angular/core/testing';

import { StudentsRegistrationServiceService } from './students-registration-service.service';

describe('StudentsRegistrationServiceService', () => {
  let service: StudentsRegistrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsRegistrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
