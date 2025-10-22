import { IsString, IsNotEmpty, IsOptional, IsDate, IsNumber } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  businessName: string;

  @IsString()
  @IsNotEmpty()
  taxId: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  activity?: string;

  @IsDate()
  @IsOptional()
  incorporationDate?: Date;

  @IsNumber()
  @IsOptional()
  annualRevenue?: number;

  @IsString()
  @IsNotEmpty()
  userDni: string;
}
