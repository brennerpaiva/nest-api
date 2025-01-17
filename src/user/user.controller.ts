import { Body, Controller, Post } from '@nestjs/common';
import { IUserEntity } from './interfaces/IUserEntity';
import { CreateUserService } from './services/create-event.service';

@Controller('user') //caminho base do endpoint é definido aqui
//ex: minhaapi.com/user
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post('create') // define a rota POST para este endpoint
  async create(@Body() user: IUserEntity): Promise<string> {
    return this.createUserService.execute(user);
  }
}
