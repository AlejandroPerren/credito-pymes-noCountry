import { PartialType } from '@nestjs/mapped-types';
import { CreateKycAmlVerificationDto } from './create-kyc-aml-verification.dto';

export class UpdateKycAmlVerificationDto extends PartialType(
  CreateKycAmlVerificationDto,
) {}
