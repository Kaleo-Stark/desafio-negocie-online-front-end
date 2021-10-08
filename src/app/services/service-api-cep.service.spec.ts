import { TestBed } from '@angular/core/testing';

import { ServiceApiCepService } from './service-api-cep.service';

describe('ServiceApiCepService', () => {
  let service: ServiceApiCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceApiCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
