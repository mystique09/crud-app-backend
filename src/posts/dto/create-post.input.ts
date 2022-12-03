import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(type => ID, {description: 'post id'})
  _id: string;
  
  @Field({ description: 'post title'})
  post_title: string;
  
  @Field({ description: 'post description' })
  post_descs: string;
  
  @Field(type => Int, { description: 'post likes', defaultValue: 0 })
  post_likes: number;
}
