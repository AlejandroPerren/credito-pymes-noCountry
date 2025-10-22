import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCreditDto } from './dto/create-credit.dto';
import { UpdateCreditDto } from './dto/update-credit.dto';

@Injectable()
export class CreditService {
  constructor(private prisma: PrismaService) {}

  async create(createCreditDto: CreateCreditDto) {
    const verified = Math.random() < 0.8;
    return this.prisma.credit.create({
      data: {
        ...createCreditDto,
        verification: {
          create: {
            verified,
            riskLevel: 'low',
            pep: false,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.credit.findMany();
  }

  findOne(id: number) {
    return this.prisma.credit.findUnique({ where: { id } });
  }

  update(id: number, updateCreditDto: UpdateCreditDto) {
    return this.prisma.credit.update({
      where: { id },
      data: updateCreditDto,
    });
  }

  remove(id: number) {
    return this.prisma.credit.delete({ where: { id } });
  }
}
