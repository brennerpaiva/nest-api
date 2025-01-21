import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TaskModule,
    UsersModule,
    MongooseModule.forRoot(
      `${process.env.MONGO_URL ?? 'mongodb+srv://yrpair:WWZXLYnJva9L7jsP@teste1.u5as1.mongodb.net/?retryWrites=true&w=majority&appName=Teste1'} `
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
