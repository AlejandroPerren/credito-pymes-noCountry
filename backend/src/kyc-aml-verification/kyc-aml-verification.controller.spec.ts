import { Test, TestingModule } from '@nestjs/testing';
import { KycAmlVerificationController } from './kyc-aml-verification.controller';
import { KycAmlVerificationService } from './kyc-aml-verification.service';
import { PrismaService } from '../prisma/prisma.service';

describe('KycAmlVerificationController', () => {
  let controller: KycAmlVerificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KycAmlVerificationController],
      providers: [
        KycAmlVerificationService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    controller = module.get<KycAmlVerificationController>(
      KycAmlVerificationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
