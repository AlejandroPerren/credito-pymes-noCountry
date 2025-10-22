import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';

export class CreateDigitalSignatureDto {
  @IsString()
  @IsNotEmpty()
  documentHash: string;

  @IsDate()
  @IsOptional()
  signatureDate?: Date;

  @IsString()
  @IsNotEmpty()
  signedBy: string;

  @IsString()
  @IsOptional()
  documentUrl?: string;
}
