import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://yrpair:WWZXLYnJva9L7jsP@teste1.u5as1.mongodb.net/?retryWrites=true&w=majority&appName=Teste1'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
