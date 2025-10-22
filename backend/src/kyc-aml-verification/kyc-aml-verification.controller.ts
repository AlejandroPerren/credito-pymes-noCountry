import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KycAmlVerificationService } from './kyc-aml-verification.service';
import { CreateKycAmlVerificationDto } from './dto/create-kyc-aml-verification.dto';
import { UpdateKycAmlVerificationDto } from './dto/update-kyc-aml-verification.dto';

@Controller('kyc-aml-verification')
export class KycAmlVerificationController {
  constructor(
    private readonly kycAmlVerificationService: KycAmlVerificationService,
  ) {}

  @Post()
  create(@Body() createKycAmlVerificationDto: CreateKycAmlVerificationDto) {
    return this.kycAmlVerificationService.create(createKycAmlVerificationDto);
  }

  @Get()
  findAll() {
    return this.kycAmlVerificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kycAmlVerificationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKycAmlVerificationDto: UpdateKycAmlVerificationDto,
  ) {
    return this.kycAmlVerificationService.update(
      +id,
      updateKycAmlVerificationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kycAmlVerificationService.remove(+id);
  }
}
