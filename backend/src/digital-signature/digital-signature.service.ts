import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDigitalSignatureDto } from './dto/create-digital-signature.dto';
import { UpdateDigitalSignatureDto } from './dto/update-digital-signature.dto';

@Injectable()
export class DigitalSignatureService {
  constructor(private prisma: PrismaService) {}

  create(createDigitalSignatureDto: CreateDigitalSignatureDto) {
    return this.prisma.digitalSignature.create({
      data: createDigitalSignatureDto,
    });
  }

  findAll() {
    return this.prisma.digitalSignature.findMany();
  }

  findOne(id: number) {
    return this.prisma.digitalSignature.findUnique({ where: { id } });
  }

  update(id: number, updateDigitalSignatureDto: UpdateDigitalSignatureDto) {
    return this.prisma.digitalSignature.update({
      where: { id },
      data: updateDigitalSignatureDto,
    });
  }

  remove(id: number) {
    return this.prisma.digitalSignature.delete({ where: { id } });
  }
}
