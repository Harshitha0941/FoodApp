/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restuarent } from 'src/entities/entity/restuarent.entity';

import { RestuarentController } from './restuarent.controller';
import { RestuarentService } from './restuarent.service';

@Module({
  imports: [TypeOrmModule.forFeature([Restuarent])],

  controllers: [RestuarentController],
  providers: [RestuarentService],
  exports:[RestuarentService]
})
export class RestuarentModule {}