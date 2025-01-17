import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateUserRepositorie } from './repositories/create-user.repositorie';
import { User, UserSchema } from './schema/user.schema';
import { CreateUserService } from './services/create-event.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [CreateUserRepositorie, CreateUserService],
  exports: [CreateUserRepositorie, CreateUserService],
})
export class UserModule {}
