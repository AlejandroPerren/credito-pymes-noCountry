import { Controller, Post, Req, Res, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response, Request } from 'express';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body() loginDto: LoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { access_token, ...userData } = await this.authService.login(
      loginDto.email,
      loginDto.pass,
    );

    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'lax',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    return userData;
  }

  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('access_token');
    return this.authService.logout();
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
