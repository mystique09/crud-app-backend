import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaMongoose } from 'mongoose';
import { User } from "../users/users.schema";

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop({ required: true, minLength: 1 })
  post_title: string;

  @Prop({ required: true, minLength: 1 })
  post_desc: string;

  @Prop({ default: 0 })
  post_likes: number;
  
  @Prop({ type: [{ type: SchemaMongoose.Types.ObjectId, ref: 'User' }] })
  post_author: User;
}

export const PostSchema = SchemaFactory.createForClass(Post);