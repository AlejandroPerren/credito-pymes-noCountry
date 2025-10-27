import { Test, TestingModule } from '@nestjs/testing';
import { DigitalSignatureController } from './digital-signature.controller';
import { DigitalSignatureService } from './digital-signature.service';
import { PrismaService } from '../prisma/prisma.service';

describe('DigitalSignatureController', () => {
  let controller: DigitalSignatureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalSignatureController],
      providers: [
        DigitalSignatureService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    controller = module.get<DigitalSignatureController>(
      DigitalSignatureController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
