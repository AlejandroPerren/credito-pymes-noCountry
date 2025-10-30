import { IsNumber, IsInt, IsDate, IsOptional, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CreditStatus } from '@prisma/client';

export class CreateCreditDto {
  @IsNumber()
  @IsNotEmpty()
  requestedAmount: number;

  @IsInt()
  @IsNotEmpty()
  termMonths: number;

  @IsNumber()
  @IsNotEmpty()
  interestRate: number;

  @IsEnum(CreditStatus)
  @IsOptional()
  status?: CreditStatus;

  @IsDate()
  @IsOptional()
  requestDate?: Date;

  @IsDate()
  @IsOptional()
  approvalDate?: Date;

  @IsInt()
  @IsNotEmpty()
  companyId: number;

  @IsString()
  @IsNotEmpty()
  userDni: string;
}
