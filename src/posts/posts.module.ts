import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Post } from './post.schema';

@Module({
  providers: [PostsResolver, PostsService],
  imports: [MongooseModule.forFeature([{name: Post.name, schema: Post}])]
})
export class PostsModule {}
