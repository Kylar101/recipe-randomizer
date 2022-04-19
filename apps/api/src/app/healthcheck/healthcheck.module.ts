import { Module } from '@nestjs/common';

import { HealthcheckController } from './healthcheck.controller';
import { HealthCheckService } from './healthcheck.service';

@Module({
  imports: [],
  controllers: [HealthcheckController],
  providers: [HealthCheckService],
})
export class HealthcheckModule {}
