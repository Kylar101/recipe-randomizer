import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { PrismaService } from '../../services/prisma.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}
  @Query(() => [User])
  async users() {
    const users = await this.prisma.user.findMany()
    return users
  }

  @Query(() => User)
  async user(@Args('id') id: number) {
    const user = await this.prisma.user.findFirst({
      where: {
        id
     }
    })
    return user
  }

  @Mutation(() => User)
  async addUser() {
    const user = await this.prisma.user.create({ data: { id: Math.floor(Math.random() * 1000) + 1}})
    return user;
  }
}