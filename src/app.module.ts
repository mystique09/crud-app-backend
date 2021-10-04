import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

const MONGO_URI_PROD = "mongodb+srv://mystique09:9nGhsRv1HIr0yiuz@cluster0.tr9fs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGO_URI_DEV = "mongodb://localhost:27017/crud-backend";

@Module({
  imports: [GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: 'schema.gql'
  }),
  MongooseModule.forRoot(MONGO_URI_DEV),
  UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}