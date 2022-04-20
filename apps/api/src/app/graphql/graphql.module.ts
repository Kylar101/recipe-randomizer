import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from '../services/prisma.service';
import { IngredientResolver } from './resolvers/ingredient.resolver';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { StepResolver } from './resolvers/step.resolver';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver
    })
  ],
  providers: [UserResolver, RecipeResolver, StepResolver, IngredientResolver, PrismaService]
})
export class GraphqlModule {}