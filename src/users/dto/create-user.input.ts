import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'username field' })
  username: string;
  
  @Field({ description: 'password field' })
  password: string;
  
  @Field({ description: 'email field' })
  email: string;
  
  @Field(type => Date, { description: 'created at field', defaultValue: Date.now() })
  created_at: Date;
}
