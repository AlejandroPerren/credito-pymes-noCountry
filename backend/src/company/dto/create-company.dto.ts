import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDate,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
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
  @Type(() => Date)
  incorporationDate?: Date;

  @IsNumber()
  @IsOptional()
  annualRevenue?: number;

  @IsString()
  @IsNotEmpty()
  userDni: string;
}
