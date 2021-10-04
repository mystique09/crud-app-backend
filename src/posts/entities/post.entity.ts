import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Post {
  @Field({description: 'Post title', nullable: false})
  post_title: string;

  @Field({description: 'Post description', nullable: false})
  post_desc: string;

  @Field(type => Int, {description: `Posts's total likes`, nullable: false})
  post_likes: number;

  //@Field(type => User, {description: 'Post author', nullable: false})
  //post_author: User;
}
