/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/entity/cart.entity';
import { FoodItems } from './entities/entity/foodItems.entity';
import { OrderDetails } from './entities/entity/order.entity';
import { Restuarent } from './entities/entity/restuarent.entity';
import { User } from './entities/entity/user.entity';
import { RestuarentModule } from './modules/restuarent/restuarent.module';
import { UserModule } from './modules/user/user.module';
import { FoodItemsModule } from './modules/food-items/food-items.module';
import { CartModule } from './modules/cart/cart.module';
import { OrderModule } from './modules/order/order.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'onlineFoodApp',
      // autoLoadEntities:true,
      entities: [User, Cart, FoodItems, OrderDetails, Restuarent],
      synchronize: false,
    }),
    UserModule,RestuarentModule,FoodItemsModule,CartModule,OrderModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}