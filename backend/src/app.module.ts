import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import configuration from 'config/configuration';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
