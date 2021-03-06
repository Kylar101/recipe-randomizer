import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { MaxLength } from "class-validator";
import { Ingredient } from "./ingredient.model";
import { Step } from "./step.model";

@ObjectType({ description: 'recipe'})
export class Recipe {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  prepTime: string;

  @Field()
  cookTime: string;

  @Field()
  serves: number;

  @Field(() => [Step], { nullable: 'items' })
  Steps: Step[];

  @Field(() => [Ingredient], { nullable: 'items' })
  Ingredients: Ingredient[];
}

@InputType()
export class NewRecipe {
  @Field()
  @MaxLength(100)
  name: string;

  @Field()
  prepTime: string;

  @Field()
  cookTime: string;

  @Field()
  serves: number;
}

@InputType()
export class UpdatedRecipe {
  @Field({ nullable: true })
  @MaxLength(100)
  name?: string;

  @Field({ nullable: true })
  prepTime?: string;

  @Field({ nullable: true })
  cookTime?: string;

  @Field({ nullable: true })
  serves?: number;
}