import { Module } from '@nestjs/common';
import { KycAmlVerificationService } from './kyc-aml-verification.service';
import { KycAmlVerificationController } from './kyc-aml-verification.controller';

@Module({
  providers: [KycAmlVerificationService],
  controllers: [KycAmlVerificationController],
})
export class KycAmlVerificationModule {}
