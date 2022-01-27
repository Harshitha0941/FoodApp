/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'src/entities/entity/cart.entity';
import { Repository } from 'typeorm';
import { CartDto } from './dto/cart.dto';
import { UserService } from './../user/user.service';
import { FoodItemsService } from './../food-items/food-items.service';
import { UserNotFoundException } from './../../../documentation/js/search/search_index';
import { DataNotFoundException } from './../../../documentation/js/search/search_index';
import { DataNotAdded } from 'src/common/filters/customException.exception';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
    private userService: UserService,
    private foodItemsService: FoodItemsService,
  ) {}

  async addCartDetails(addCartDto: CartDto): Promise<any> {
    const result: any = await this.userService.getUserByEmail(
      addCartDto.emailId,
    );
    if (result) {
      const foodItemObj: any = await this.foodItemsService.getFoodByName(
        addCartDto.foodName,
        addCartDto.resName,
      );
      if (foodItemObj) {
        console.log('username :', result);
        console.log('from----', foodItemObj);
        const cart = new Cart();
        const date = new Date();
        Object.assign(cart, addCartDto);
        cart.isActive = true;
        cart.createdAt = date.toLocaleDateString();
        cart.createTime = date.toLocaleTimeString();
        cart.foodItems = foodItemObj;
        cart.foodPrice = foodItemObj.foodPrice;
        cart.user = result;
        const cartResult = await this.cartRepository.save(cart);
        if(cartResult){
          return "Data Added Successfully"
        }
        else throw new DataNotAdded();
      } else throw new DataNotFoundException();
    } else throw new UserNotFoundException();
  }
  /**
   *
   * @returns all the items in the cart
   */
  async getAllCartDetails() {
    return await this.cartRepository.find();
  }

  /**
   *
   * @returns a promise which empties cart
   */
   async clearCart() {
    return await this.cartRepository.clear();
  }

  async deleteItem(id:number):Promise<string>{
    await this.cartRepository.delete(id);
    return "Delete Successfully";
  }
}
