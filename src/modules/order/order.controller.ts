import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderDetails } from 'src/entities/entity/order.entity';

import { OrderDetailsService } from './order.service';

@Controller('order')
@ApiTags('order')
export class OrderController {
  constructor(private readonly orderService: OrderDetailsService) {}

  /**
   *
   * @returns a string if order gets placed
   */
  @Post('/placeOrder/:emailId')
  placeOrder(@Param('emailId') emailId: string): Promise<any> {
    return this.orderService.placeOrder(emailId);
  }

  /**
   *
   * @returns returns all order details
   */
  @Get('/getAllOrderDetails')
  getAllOrderDetails(): Promise<OrderDetails[]> {
    return this.orderService.getAllOrderDetails();
  }
}
