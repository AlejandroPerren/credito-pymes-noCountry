import { Test, TestingModule } from '@nestjs/testing';
import { KycAmlVerificationController } from './kyc-aml-verification.controller';

describe('KycAmlVerificationController', () => {
  let controller: KycAmlVerificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KycAmlVerificationController],
    }).compile();

    controller = module.get<KycAmlVerificationController>(
      KycAmlVerificationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
