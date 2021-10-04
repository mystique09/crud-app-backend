import {
  Module
} from '@nestjs/common';
import {
  PostsService
} from './posts.service';
import {
  PostsResolver
} from './posts.resolver';
import {
  Post,
  PostSchema
} from "./posts.schema";
import {
  MongooseModule
} from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeatureAsync([{
    name: Post.name, useFactory(){
      const schema = PostSchema;
      
      schema.pre('save', ()=> {
        console.log('Hello from post pre-save!');
      });
      return schema;
    }
  }])],
  providers: [PostsResolver, PostsService]
})
export class PostsModule {}