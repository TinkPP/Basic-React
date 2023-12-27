import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cbss } from 'src/entities/cbss.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cbss])],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
