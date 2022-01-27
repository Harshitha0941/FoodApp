/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodItems } from 'src/entities/entity/foodItems.entity';
import { Restuarent } from 'src/entities/entity/restuarent.entity';
import { RestuarentService } from '../restuarent/restuarent.service';
import { FoodItemsController } from './food-items.controller';
import { FoodItemsService } from './food-items.service';


@Module({
  imports: [TypeOrmModule.forFeature([FoodItems,Restuarent])],

  controllers: [FoodItemsController],
  providers: [FoodItemsService,RestuarentService],
  exports:[FoodItemsService]
})
export class FoodItemsModule {}