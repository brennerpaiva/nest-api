import { BadRequestException, Injectable } from '@nestjs/common';
import { IUserEntity } from '../interfaces/IUserEntity';
import { CreateUserRepositorie } from '../repositories/create-user.repositorie';

@Injectable()
export class CreateUserService {
  constructor(private readonly createUserRepository: CreateUserRepositorie) {}

  async execute(user: IUserEntity): Promise<string> {
    if (user.age < 18) {
      throw new BadRequestException('User must be at least 18 years old');
    }
    const newEvent = await this.createUserRepository.execute(user);
    return newEvent.name; //retorna o IEntity.name (string)
  }
}
