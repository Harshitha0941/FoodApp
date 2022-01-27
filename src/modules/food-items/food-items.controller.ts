/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FoodItemsDto } from './dto/fooditems.dto';
import { FoodItemsService } from './food-items.service';

/**
 * starting of controller
 *
 */
@Controller('food-items')
@ApiTags('food-items')
export class FoodItemsController {
    constructor(private readonly fooditemsService: FoodItemsService) {}

  /**
     * 
     * @param foodDto accepts foodDto as input
     */
  @Post('/addFoodItem')
  addRestuarent(@Body() foodItemsDto: FoodItemsDto): Promise<any> {
    return this.fooditemsService.addFoodDetails(foodItemsDto);
  }

   /**
   * 
   * @param resName accepts resName as input
   * @returns a rest obj based on food and res name
   */
  // @Get('/:resName')
  // getFoods(@Param('resName') resName:string):Promise<any>{
  //   return this.fooditemsService.getFoods(resName);
  // }
}
