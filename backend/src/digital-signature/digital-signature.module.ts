import { Module } from '@nestjs/common';
import { DigitalSignatureService } from './digital-signature.service';
import { DigitalSignatureController } from './digital-signature.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  providers: [DigitalSignatureService],
  controllers: [DigitalSignatureController],
})
export class DigitalSignatureModule {}
