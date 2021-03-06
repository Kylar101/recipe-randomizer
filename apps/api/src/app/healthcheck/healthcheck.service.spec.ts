import { Test } from '@nestjs/testing';

import { HealthCheckService } from './healthcheck.service';

describe('HealthCheckService', () => {
  let service: HealthCheckService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [HealthCheckService],
    }).compile();

    service = app.get<HealthCheckService>(HealthCheckService);
  });

  describe('getData', () => {
    it('should return "Working"', () => {
      expect(service.getData()).toEqual({ message: 'Working' });
    });
  });
});
