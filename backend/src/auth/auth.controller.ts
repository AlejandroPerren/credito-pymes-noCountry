import { Controller, Post, Req, Res, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response, Request } from 'express';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto, @Res() res: Response) {
    return this.authService.login(loginDto.email, loginDto.pass, res);
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
