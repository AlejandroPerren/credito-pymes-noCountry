import { Test, TestingModule } from '@nestjs/testing';
import { KycAmlVerificationService } from './kyc-aml-verification.service';

describe('KycAmlVerificationService', () => {
  let service: KycAmlVerificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KycAmlVerificationService],
    }).compile();

    service = module.get<KycAmlVerificationService>(KycAmlVerificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
