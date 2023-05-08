import { TestBed } from '@angular/core/testing';

import { TeacherRegistrationServiceService } from './teacher-registration-service.service';

describe('TeacherRegistrationServiceService', () => {
  let service: TeacherRegistrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherRegistrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
