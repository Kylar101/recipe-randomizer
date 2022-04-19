import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaService } from '../services/prisma.service';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver
    })
  ],
  providers: [UserResolver, RecipeResolver, PrismaService]
})
export class GraphqlModule {}