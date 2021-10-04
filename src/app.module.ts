import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [GraphQLModule.forRoot({
    debug: true,
    playground: true,
    autoSchemaFile: 'schema.gql'
  }),
  MongooseModule.forRoot('mongodb+srv://mystique09:9nGhsRv1HIr0yiuz@cluster0.tr9fs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
  UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}