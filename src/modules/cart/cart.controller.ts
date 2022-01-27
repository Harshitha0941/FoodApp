/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Cart } from 'src/entities/entity/cart.entity';

import { CartService } from './cart.service';
import { CartDto } from './dto/cart.dto';

@Controller('cart')
@ApiTags('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /**
   *
   * @param addFoodItemDto accepts objects of foodItemsService
   * @returns foodItem object , if foodItem is added Successfully
   */
  @Post('/addCartDetails')
  addCartDetails(@Body() addCartDto: CartDto): Promise<any> {
    return this.cartService.addCartDetails(addCartDto);
  }
/**
 * 
 * @returns all the items in the cart
 */
  @Get("")
  getAllCartDetails(): Promise<Cart[]> {
    return this.cartService.getAllCartDetails();
  }

  @Delete('/:id')
  deleteItem(@Param('id')id:number):Promise<string>{
    return this.cartService.deleteItem(id);
  }
}