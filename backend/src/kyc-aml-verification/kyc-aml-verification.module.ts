import { Module } from '@nestjs/common';
import { KycAmlVerificationService } from './kyc-aml-verification.service';
import { KycAmlVerificationController } from './kyc-aml-verification.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [KycAmlVerificationService],
  controllers: [KycAmlVerificationController],
})
export class KycAmlVerificationModule {}
