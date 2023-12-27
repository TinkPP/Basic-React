import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { Testservice } from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from 'src/entities/test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [TestController],
  providers: [Testservice],
})
export class TestModule {}
