import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../../services/prisma.service';
import { Ingredient, NewIngredient, UpdateIngredient } from '../models/ingredient.model';

@Resolver(() => Ingredient)
export class IngredientResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Ingredient])
  async ingredients(@Args('recipeId') recipeId: number) {
    return this.prisma.ingredient.findMany({
      where: { recipeId }
    });
  }

  @Mutation(() => Ingredient)
  async addIngredient(@Args('newIngredient') newIngredient: NewIngredient) {
    return this.prisma.ingredient.create({
      data: newIngredient
    });
  }

  @Mutation(() => Ingredient)
  async updateIngredient(@Args('id') id: number, @Args('updatedIngredient') updateIngredient: UpdateIngredient) {
    return this.prisma.ingredient.update({
      where: { id },
      data: { id, ...updateIngredient }
    });
  }

  @Mutation(() => Ingredient)
  async deleteIngredient(@Args('id') id: number) {
    return this.prisma.ingredient.delete({ where: { id }});
  }

  @ResolveField()
  async Recipe(@Parent() { recipeId }: Ingredient) {
    return this.prisma.recipe.findUnique({ where: { id: recipeId }});
  }
}