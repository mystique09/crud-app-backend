import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from 'process';

@Module({
  imports: [GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: 'schema.gql'
  }),
  MongooseModule.forRoot(env.MONGO_URI_DEV),
  UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}