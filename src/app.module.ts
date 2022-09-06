import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

const _MONGO_URI_PROD = "mongodb+srv://mystique09:9nGhsRv1HIr0yiuz@cluster0.tr9fs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const MONGO_URI_DEV = "mongodb://localhost:27017/crud?directConnection=true";

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    debug: true,
    playground: true,
    driver: ApolloDriver,
    autoSchemaFile: 'schema.gql',
  }),
  MongooseModule.forRoot(MONGO_URI_DEV, {
    useUnifiedTopology: true,
  }),
    UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
