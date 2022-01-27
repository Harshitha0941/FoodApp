/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/entities/entity/cart.entity';
import { FoodItems } from 'src/entities/entity/foodItems.entity';
import { OrderDetails } from 'src/entities/entity/order.entity';
import { Restuarent } from 'src/entities/entity/restuarent.entity';
import { User } from 'src/entities/entity/user.entity';
import { CartService } from '../cart/cart.service';
import { FoodItemsService } from '../food-items/food-items.service';
import { RestuarentService } from '../restuarent/restuarent.service';
import { UserService } from '../user/user.service';
import { OrderController } from './order.controller';
import { OrderDetailsService } from './order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([OrderDetails, Cart, User, FoodItems, Restuarent]),
  ],

  controllers: [OrderController],
  providers: [
    OrderDetailsService,
    CartService,
    UserService,
    FoodItemsService,
    RestuarentService,
  ],
})
export class OrderModule {}