import { Test, TestingModule } from '@nestjs/testing';
import { DigitalSignatureService } from './digital-signature.service';
import { PrismaService } from '../prisma/prisma.service';

describe('DigitalSignatureService', () => {
  let service: DigitalSignatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DigitalSignatureService,
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    service = module.get<DigitalSignatureService>(DigitalSignatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
