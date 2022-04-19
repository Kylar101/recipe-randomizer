import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewRecipe, Recipe, UpdatedRecipe } from '../models/recipe.model';
import { PrismaService } from '../../services/prisma.service';

@Resolver(() => Recipe)
export class RecipeResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Recipe])
  async recipes() {
    return this.prisma.recipe.findMany();
  }

  @Query(() => Recipe)
  async recipe(@Args('id') id: number) {
    return this.prisma.recipe.findFirst({
      where: { id }
    });
  }

  @Mutation(() => Recipe)
  async addRecipe(@Args('newRecipe') newRecipe: NewRecipe ) {
    return this.prisma.recipe.create({
      data: newRecipe
    });
  }

  @Mutation(() => Recipe)
  async updateRecipe(@Args('id') id: number, @Args('updatedRecipe') updatedRecipe: UpdatedRecipe) {
    return this.prisma.recipe.update({
      where: { id },
      data: { id, ...updatedRecipe }
    });
  }

  @Mutation(() => Recipe)
  async deleteRecipe(@Args('id') id: number) {
    return this.prisma.recipe.delete({ where: { id }});
  }
}