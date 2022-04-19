import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './graphql/graphql.module';
import { HealthcheckModule } from './healthcheck/healthcheck.module';

@Module({
  imports: [HealthcheckModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
