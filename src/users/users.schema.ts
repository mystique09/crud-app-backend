import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as SchemaMongoose } from 'mongoose';
import { Post } from "../posts/posts.schema";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true, minLength: 8, maxLength: 12 })
  username: string;

  @Prop({ required: true, minLength: 8, maxLength: 12 })
  password: string;

  @Prop({ required: true })
  email: string;
  
  @Prop({ default: 'Normal' })
  role: string;
  
  @Prop({ default: [], type: [{type: SchemaMongoose.Types.ObjectId, ref: 'Post'}]})
  posts: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);