import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from '../users/users.service';
import { comparePassword } from '../helpers/bcrypt.helper';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async login(email: string, pass: string, res: Response) {
    this.logger.log(`Iniciando login para el email: ${email}`);

    this.logger.log('Buscando usuario en la base de datos...');
    const user = await this.usersService.findOne({ email });
    this.logger.log('Usuario encontrado, procediendo a comparar contraseña.');

    if (!user || !(await comparePassword(pass, user.password))) {
      this.logger.warn(`Intento de login fallido para: ${email}`);
      throw new UnauthorizedException('Invalid credentials');
    }

    this.logger.log('Credenciales válidas. Generando token...');
    const payload = { sub: user.dni, email: user.email };
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });

    res.cookie('access_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 1000,
    });

    this.logger.log('Login exitoso y cookie enviada.');
    res.json({ message: 'Login exitoso' });
  }

  logout(res: Response) {
    res.clearCookie('access_token');
    return { message: 'Logout exitoso' };
  }
}
