import { Controller, Get } from '@nestjs/common';

import { HealthCheckService } from './healthcheck.service';

@Controller('healthcheck')
export class HealthcheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  getData() {
    return this.healthCheckService.getData();
  }

}
