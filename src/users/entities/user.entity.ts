import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';

@ObjectType()
export class User {
  @Field({description: `User's sername`, nullable: false})
  username: string;

  @Field({description: `User's Password`, nullable: false})
  password: string;

  @Field({description: `User's email`, nullable: false})
  email: string;

  @Field(type => [Post], {defaultValue: []})
  posts: [Post];

  @Field(type => String, {description: 'User role', defaultValue: 'Normal'})
  role: string;
}
