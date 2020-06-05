import { ConfirmOderDTO } from './../shared/dto/ConfirmOrderDTO';
import { AbstractClient } from './AbstractClient';

export class OrderClient extends AbstractClient {
  constructor() {
    super('order');
  }

  public confirmOrder = (data: ConfirmOderDTO) => {
    this.sleep(1000);

    return {
      success: true,
    };
  };

  public getOrders = (data: string) => {
    this.sleep(1000);

    return {
      success: true,
      data: [],
    };
  };
}
