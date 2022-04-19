import { Test, TestingModule } from '@nestjs/testing';

import { HealthcheckController } from './healthcheck.controller';
import { HealthCheckService } from './healthcheck.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HealthcheckController],
      providers: [HealthCheckService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to api!"', () => {
      const appController = app.get<HealthcheckController>(HealthcheckController);
      expect(appController.getData()).toEqual({ message: 'Working' });
    });
  });
});
