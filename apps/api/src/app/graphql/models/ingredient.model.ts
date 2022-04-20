import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Recipe } from "./recipe.model";

@ObjectType()
export class Ingredient {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  amount: string;

  @Field()
  recipeId: number;

  @Field(() => Recipe)
  Recipe: Recipe;
}

@InputType()
export class NewIngredient {
  @Field()
  name: string;

  @Field()
  amount: string;

  @Field()
  recipeId: number;
}

@InputType()
export class UpdateIngredient {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  amount?: string;

  @Field({ nullable: true })
  recipeId?: number;
}