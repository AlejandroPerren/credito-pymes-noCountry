import { Controller, Post, Req, Res, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Res() res: Response) {
    const userId = 'user123';
    return this.authService.login(userId, res);
  }

  @Post('logout')
  logout(@Res() res: Response) {
    return this.authService.logout(res);
  }

  @Get('profile')
  getProfile(
    @Req()
    req: Request & {
      cookies: {
        access_token?: string;
      };
    },
  ) {
    const token = req.cookies.access_token;
    if (!token) return { message: 'No autenticado' };
    return { message: 'Perfil', token };
  }
}
