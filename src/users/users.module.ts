import {
  Module
} from '@nestjs/common';
import {
  UsersService
} from './users.service';
import {
  UsersResolver
} from './users.resolver';
import {
  User,
  UserSchema
} from "./users.schema"
import {
  MongooseModule
} from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeatureAsync([{
    name: User.name, useFactory() {
      const schema = UserSchema;

      schema.pre('save', () => {
        console.log('Hello from user pre-save!');
      });
      return schema;
    }
  }])],
  providers: [UsersResolver, UsersService]
})
export class UsersModule { }
