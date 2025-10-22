import { IsInt, IsString, IsBoolean, IsOptional, IsDate } from 'class-validator';

export class CreateKycAmlVerificationDto {
  @IsInt()
  creditId: number;

  @IsString()
  riskLevel: string;

  @IsBoolean()
  pep: boolean;

  @IsBoolean()
  @IsOptional()
  verified?: boolean;

  @IsDate()
  @IsOptional()
  verificationDate?: Date;
}
