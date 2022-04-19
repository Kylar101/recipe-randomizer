import { Injectable } from '@nestjs/common';
import { RecipeClient } from '@nx-prisma/prisma-clients';
import { User } from '@nx-prisma/prisma-clients/recipe';

@Injectable()
export class HealthCheckService {
  private prisma: RecipeClient;
  constructor() {
    this.prisma = new RecipeClient();
  }

  getData(): Record<string, string> {
    return {
      message: 'Working'
    };
  }

  async getUsers(): Promise<User[]> {
    this.prisma.$connect()
    await this.prisma.user.create({ data: { id: Math.floor(Math.random() * 1000) + 1}})
    const users = await this.prisma.user.findMany()
    this.prisma.$disconnect()
    return users
  }
}
