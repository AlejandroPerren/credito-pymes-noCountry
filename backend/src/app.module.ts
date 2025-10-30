import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import configuration from 'config/configuration';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { CreditModule } from './credit/credit.module';
import { DigitalSignatureModule } from './digital-signature/digital-signature.module';
import { KycAmlVerificationModule } from './kyc-aml-verification/kyc-aml-verification.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: `./env/.env.${process.env.NODE_ENV || 'development'}`,
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    PrismaModule,
    CompanyModule,
    CreditModule,
    DigitalSignatureModule,
    KycAmlVerificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
