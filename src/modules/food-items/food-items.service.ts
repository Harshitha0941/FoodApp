/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { async } from 'rxjs';
import { DataNotAdded } from 'src/common/filters/customException.exception';
import { FoodItems } from 'src/entities/entity/foodItems.entity';
import { Restuarent } from 'src/entities/entity/restuarent.entity';
import { Repository } from 'typeorm';
import { RestuarentService } from '../restuarent/restuarent.service';
import { FoodItemsDto } from './dto/fooditems.dto';

/**
 * starting of FoodItemsService
 */
@Injectable()
export class FoodItemsService {
    constructor(
        @InjectRepository(FoodItems)
    private foodItemsRepository: Repository<FoodItems>,
    private resService:RestuarentService,
      ) {}
    /**
     * 
     * @param foodDto accepts foodDto as input
     */
    async addFoodDetails(foodDto:FoodItemsDto):Promise<any>{
        const result = await this.resService.getByResName(foodDto.resName);
        const foodItem = new FoodItems();
        const date = new Date();
        Object.assign(foodItem,foodDto);
        foodItem.res = result ;
        foodItem.isActive = true;
        foodItem.createdAt = date.toLocaleDateString();
        foodItem.createTime = date.toLocaleTimeString();
        const foodResult  = await this.foodItemsRepository.save(foodItem);
        if(foodResult){
          return "food details added Succesfully";
        }
        else throw new DataNotAdded();
    }
/**
 * 
 * @param foodName accepts food name as input
 * @param resName accepts resName as input
 * @returns a rest obj based on food and res name
 */
  async getFoodByName(foodName: string, resName: string) {
    const resObj: any = this.resService.getByResName(resName);
    return await this.foodItemsRepository.findOne({
      foodName: foodName,
      res: resObj,
    });
  }

  /**
   * 
   * @param resName accepts resName as input
   * @returns a rest obj based on food and res name
   */

  // async getFoods(resName:string):Promise<any>{
  //   const resObj:any =await  this.resService.getByResName(resName)
  //   const food = await this.foodItemsRepository.find(
  //     resId : resObj.id;
  //   );
//}

}

