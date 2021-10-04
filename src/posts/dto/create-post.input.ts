import { InputType, Field } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';

@InputType()
export class CreatePostInput extends Post {
  @Field(type => Date, {description: 'user created at field.', defaultValue: Date.now()})
  created_at: Date;
}
