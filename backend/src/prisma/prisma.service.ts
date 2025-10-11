// src/prisma/prisma.service.ts
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly configService: ConfigService) {
    super({
      datasources: {
        db: {
          url: configService.get<string>('database.uri'),
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Conectado a la base de datos MySQL');
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
