import { Injectable } from '@nestjs/common';
import { Order } from '../__generated__/graphql.schema';

@Injectable()
export class OrdersService {
  private orders: Order[] = [
    {
      id: '1',
      name: 'Order 1',
    },
    {
      id: '2',
      name: 'Order 2',
    },
  ];

  findAll(): Promise<Order[]> {
    return Promise.resolve(this.orders);
  }

  createOrder(order: Order): Promise<Order> {
    this.orders.push(order);
    return Promise.resolve(order);
  }
}
