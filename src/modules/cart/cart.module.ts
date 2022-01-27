/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/entities/entity/cart.entity';

import { CartController } from './cart.controller';
import { UserService } from './../user/user.service';
import { CartService } from './cart.service';
import { FoodItems } from 'src/entities/entity/foodItems.entity';
import { FoodItemsService } from './../food-items/food-items.service';
import { User } from './../../entities/entity/user.entity';
import { Restuarent } from 'src/entities/entity/restuarent.entity';
import { RestuarentService } from '../restuarent/restuarent.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cart,FoodItems,User,Restuarent])],

  controllers: [CartController],
  providers: [CartService,UserService,FoodItemsService,RestuarentService],
})
export class CartModule {}
