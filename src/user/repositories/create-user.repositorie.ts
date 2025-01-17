import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserEntity } from '../interfaces/IUserEntity';
import { User, userDocument } from '../schema/user.schema';

@Injectable()
export class CreateUserRepositorie {
  constructor(@InjectModel(User.name) private authModel: Model<userDocument>) {}

  async execute(user: IUserEntity): Promise<IUserEntity> {
    const createdUser = new this.authModel(user);
    await createdUser.save();
    return createdUser.toObject();
  }
}
