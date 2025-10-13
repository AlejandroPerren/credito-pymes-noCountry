// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(userId: string, res: Response) {
    const payload = { sub: userId };
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
