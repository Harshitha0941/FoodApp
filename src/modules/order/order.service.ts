import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDetails } from 'src/entities/entity/order.entity';

import { Repository } from 'typeorm';
import { CartService } from '../cart/cart.service';
import { UserService } from '../user/user.service';

/**
 * Starting of OrderDetailsService
 */
@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetails)
    private orderRepository: Repository<OrderDetails>,
    private userService: UserService,
    private cartService: CartService,
  ) {}

  /**
   *
   * @returns a string if order gets placed
   */
  async placeOrder(emailId: string): Promise<string> {
    const userResult = await this.userService.getUserByEmail(emailId);
    const orderDetails: OrderDetails = new OrderDetails();
    orderDetails.userId = userResult.id;
    this.orderRepository.save(orderDetails);
    this.cartService.clearCart();
    return 'ordered sucessfully';
  }

  async getAllOrderDetails(): Promise<OrderDetails[]> {
    return await this.orderRepository.find();
  }
}
