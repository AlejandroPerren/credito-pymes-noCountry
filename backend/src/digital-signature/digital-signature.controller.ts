import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DigitalSignatureService } from './digital-signature.service';
import { CreateDigitalSignatureDto } from './dto/create-digital-signature.dto';
import { UpdateDigitalSignatureDto } from './dto/update-digital-signature.dto';

@Controller('digital-signature')
export class DigitalSignatureController {
  constructor(
    private readonly digitalSignatureService: DigitalSignatureService,
  ) {}

  @Post()
  create(@Body() createDigitalSignatureDto: CreateDigitalSignatureDto) {
    return this.digitalSignatureService.create(createDigitalSignatureDto);
  }

  @Get()
  findAll() {
    return this.digitalSignatureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.digitalSignatureService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDigitalSignatureDto: UpdateDigitalSignatureDto,
  ) {
    return this.digitalSignatureService.update(+id, updateDigitalSignatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.digitalSignatureService.remove(+id);
  }
}
