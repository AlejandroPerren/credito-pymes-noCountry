import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { hashPassword } from '../helpers/bcrypt.helper';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const hashedPassword = await hashPassword(createUserDto.password);
      return await this.prisma.user.create({
        data: {
          ...createUserDto,
          password: hashedPassword,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new ConflictException('User with this email or DNI already exists.');
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(identifier: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({ where: identifier });
  }

  async update(dni: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await hashPassword(updateUserDto.password);
    }
    return this.prisma.user.update({
      where: { dni },
      data: updateUserDto,
    });
  }

  remove(dni: string) {
    return this.prisma.user.delete({ where: { dni } });
  }
}
