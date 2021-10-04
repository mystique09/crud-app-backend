import { CreatePostInput } from './create-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Post } from '../entities/post.entity';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => Int)
  id: number;

  @Field(type => Date, {description: 'post updated at field', defaultValue: Date.now()})
  updated_at: Date;
}
