import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  getData(): Record<string, string> {
    return {
      message: 'Working'
    };
  }
}
