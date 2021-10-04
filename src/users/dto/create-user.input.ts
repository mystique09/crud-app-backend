import { InputType, Field } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends User {
  @Field(type => Date, {description: 'User created at field.', defaultValue: Date.now()})
  created_at: Date;
}
