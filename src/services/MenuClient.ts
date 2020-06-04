import { pizzas } from './../shared/constants/pizzas';
import { PizzaDTO } from './../shared/dto/PizzaDTO';
import { AbstractClient } from './AbstractClient';

export class MenuClient extends AbstractClient {
  constructor() {
    super('menu');
  }

  public getMenu = async (): Promise<PizzaDTO[]> => {
    await this.sleep(1000);

    return pizzas;
  };
}
