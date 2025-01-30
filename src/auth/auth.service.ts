import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(signInRequest: SignInDto): Promise<{ access_token: string }> {
    const user = await this.userService.findOne(signInRequest.email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await bcrypt.compare(
      signInRequest.password,
      user.password
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    const payload = { userEmail: user.email, userName: user.name };
    const access_token = await this.jwtService.signAsync(payload);
    return { access_token };
  }

  async profile(email: string): Promise<User> {
    return this.userService.findOne(email);
  }
}
