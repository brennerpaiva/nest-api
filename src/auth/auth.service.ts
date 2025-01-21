import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(email: string): Promise<{ access_token: string }> {
    const user = await this.userService.findOne(email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { userEmail: user.email, userName: user.name };
    const access_token = await this.jwtService.signAsync(payload);

    return { access_token };
  }
}
