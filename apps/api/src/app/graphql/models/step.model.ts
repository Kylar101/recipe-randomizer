import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Recipe } from "./recipe.model";

@ObjectType()
export class Step {
  @Field(() => ID)
  id: number;

  @Field()
  method: string;

  @Field()
  recipeId: number;

  @Field(() => Recipe)
  Recipe: Recipe;
}

@InputType()
export class NewStep {
  @Field()
  method: string;

  @Field()
  recipeId: number;
}

@InputType()
export class UpdatedStep {
  @Field({ nullable: true })
  method?: string;
  
  @Field({ nullable: true })
  recipeId?: number;
}