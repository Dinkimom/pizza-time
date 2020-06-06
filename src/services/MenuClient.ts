import { pizzas } from './../shared/constants/pizzas';
import { AbstractClient } from './AbstractClient';

export class MenuClient extends AbstractClient {
  constructor() {
    super('menu');
  }

  public getMenu = async () => {
    await this.sleep(500);

    return {
      data: pizzas,
    };
  };
}
