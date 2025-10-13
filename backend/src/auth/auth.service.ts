import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from '../users/users.service';
import { comparePassword } from '../helpers/bcrypt.helper';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(email: string, pass: string, res: Response) {
    const user = await this.usersService.findOne({ email });
    if (!user || !(await comparePassword(pass, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: user.dni, email: user.email };
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000,
    });

    return { message: 'Login exitoso' };
  }

  logout(res: Response) {
    res.clearCookie('access_token');
    return { message: 'Logout exitoso' };
  }
}
