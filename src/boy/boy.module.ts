import { Module } from '@nestjs/common';
import { BoyService } from './boy.service';
import { BoyController } from './boy.controller';

@Module({
  controllers: [BoyController],
  providers: [BoyService],
  exports:[BoyService] //添加导出
})
export class BoyModule {}
