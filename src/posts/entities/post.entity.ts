import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { User } from "../../users/entities/user.entity";

@ObjectType()
export class Post {
  @Field(type => ID, {description: 'post id'})
  _id: string;
  
  @Field({ description: 'post title'})
  post_title: string;
  
  @Field({ description: 'post description'})
  post_descs: string;
  
  @Field(type => Int, { description: 'post likes'})
  post_likes: number;
  
  @Field(type => User, { description: 'post author'})
  post_author: User;
}
