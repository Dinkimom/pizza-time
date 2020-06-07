import { userHistory } from './../shared/constants/userHistory';
import { ConfirmOderDTO } from './../shared/dto/ConfirmOrderDTO';
import { AbstractClient } from './AbstractClient';

export class OrderClient extends AbstractClient {
  constructor() {
    super('order');
  }

  public getOrders = async (data: string) => {
    await this.sleep(1000);

    return {
      success: true,
      data: userHistory,
    };
  };

  public confirmOrder = async (data: ConfirmOderDTO) => {
    await this.sleep(1000);

    return {
      success: true,
    };
  };
}
