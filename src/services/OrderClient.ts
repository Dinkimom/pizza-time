import { ConfirmOderDTO } from './../shared/dto/ConfirmOrderDTO';
import { OrderDTO } from './../shared/dto/OrderDTO';
import { AbstractClient } from './AbstractClient';

export class OrderClient extends AbstractClient {
  constructor() {
    super('order');
  }

  public getOrders = (): OrderDTO[] => {
    return [];
  };

  public addToOrder = (data: OrderDTO) => {};

  public removeFromOrder = (data: string) => {};

  public updateOrder = (data: OrderDTO) => {};

  public confirmOrder = (data: ConfirmOderDTO) => {};
}
