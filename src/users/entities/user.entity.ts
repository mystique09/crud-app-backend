import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from "../../posts/entities/post.entity";

@ObjectType()
export class User {
  @Field(type => ID, {description: 'user id'})
  _id: string;
  
  @Field({ description: 'username field' })
  username: string;
  
  @Field({ description: 'password field' })
  password: string;
  
  @Field({ description: 'email field' })
  email: string;
  
  @Field({ description: 'password field', defaultValue: 'Normal' })
  role: string;
  
  @Field(type => [Post], { description: 'password field', defaultValue: [] })
  posts: Post[];
}
