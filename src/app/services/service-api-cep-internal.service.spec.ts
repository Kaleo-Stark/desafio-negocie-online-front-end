import { TestBed } from '@angular/core/testing';

import { ServiceApiCepInternalService } from './service-api-cep-internal.service';

describe('ServiceApiCepInternalService', () => {
  let service: ServiceApiCepInternalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceApiCepInternalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
