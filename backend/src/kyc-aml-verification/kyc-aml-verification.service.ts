import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKycAmlVerificationDto } from './dto/create-kyc-aml-verification.dto';
import { UpdateKycAmlVerificationDto } from './dto/update-kyc-aml-verification.dto';

@Injectable()
export class KycAmlVerificationService {
  constructor(private prisma: PrismaService) {}

  create(createKycAmlVerificationDto: CreateKycAmlVerificationDto) {
    const verified = Math.random() < 0.8;
    return this.prisma.kycAmlVerification.create({
      data: { ...createKycAmlVerificationDto, verified },
    });
  }

  findAll() {
    return this.prisma.kycAmlVerification.findMany();
  }

  findOne(id: number) {
    return this.prisma.kycAmlVerification.findUnique({ where: { id } });
  }

  update(id: number, updateKycAmlVerificationDto: UpdateKycAmlVerificationDto) {
    return this.prisma.kycAmlVerification.update({
      where: { id },
      data: updateKycAmlVerificationDto,
    });
  }

  remove(id: number) {
    return this.prisma.kycAmlVerification.delete({ where: { id } });
  }
}
