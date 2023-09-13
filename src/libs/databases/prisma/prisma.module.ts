import { Global, Module } from '@nestjs/common';

import { PrismaService } from '@libs/databases/prisma/services/prisma.service';

@Global()
@Module({
  imports: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrimsaModule {}
