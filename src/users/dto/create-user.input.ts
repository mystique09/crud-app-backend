import { InputType, DateScalarMode, Field } from '@nestjs/graphql';
import { User } from '../entities/user.entity';

@InputType()
export class CreateUserInput extends User {
  @Field(type => Date, {description: 'User created at field.'})
  created_at: DateScalarMode;
}
