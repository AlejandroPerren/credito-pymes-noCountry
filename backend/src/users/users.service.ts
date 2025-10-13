import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { hashPassword } from '../helpers/bcrypt.helper';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await hashPassword(createUserDto.password);
    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
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
