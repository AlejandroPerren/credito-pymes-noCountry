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

  async login(email: string, pass: string) {
    this.logger.log(`Iniciando login para el email: ${email}`);

    this.logger.log('Buscando usuario en la base de datos...');
    const user = await this.usersService.findOne({ email });
    this.logger.log('Usuario encontrado:', JSON.stringify(user));

    if (!user || !(await comparePassword(pass, user.password))) {
      this.logger.warn(`Intento de login fallido para: ${email}`);
      throw new UnauthorizedException('Invalid credentials');
    }

    this.logger.log('Credenciales válidas. Generando token...');
    const payload = { sub: user.dni, email: user.email, role: user.role };
    this.logger.log('Payload a firmar:', JSON.stringify(payload));
    const token = this.jwtService.sign(payload);
    this.logger.log('Token generado:', token);

    this.logger.log('Login exitoso.');
    return {
      access_token: token,
      role: user.role,
      firstname: user.firstName,
      lastname: user.lastName,
    };
  }

  logout() {
    return { message: 'Logout exitoso' };
  }
}
