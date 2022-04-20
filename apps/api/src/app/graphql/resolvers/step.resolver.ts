import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../services/prisma.service';
import { NewStep, Step, UpdatedStep } from '../models/step.model';

@Resolver(() => Step)
export class StepResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Step])
  async steps(@Args('recipeId') recipeId: number) {
    return this.prisma.step.findMany({
      where: {
        recipeId
      }
    });
  }

  @Mutation(() => Step)
  async addStep(@Args('newStep') newStep: NewStep) {
    return this.prisma.step.create({
      data: newStep
    });
  }

  @Mutation(() => Step)
  async updateStep(@Args('id') id: number, @Args('updatedStep') updatedStep: UpdatedStep) {
    return this.prisma.step.update({
      where: { id },
      data: { id, ...updatedStep }
    });
  }

  @Mutation(() => Step)
  async deleteStep(@Args('id') id: number) {
    return this.prisma.step.delete({ where: { id }});
  }

  @ResolveField()
  async Recipe(@Parent() { recipeId }: Step) {
    return this.prisma.recipe.findUnique({ where: { id: recipeId }});
  }
}