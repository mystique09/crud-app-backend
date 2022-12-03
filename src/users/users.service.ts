import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserDocument, User } from "./users.schema"
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}
  
  async create(createUserInput: CreateUserInput) {
    try {
      const newUser = new this.userModel(createUserInput);
      await newUser.save();
      return newUser;
    } catch(e) {
      throw e.message;
    }
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return this.userModel.findById(id).exec();
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
