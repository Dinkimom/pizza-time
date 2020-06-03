import { PizzaDTO } from './../shared/dto/PizzaDTO';
import { AbstractClient } from './AbstractClient';

export class MenuClient extends AbstractClient {
  constructor() {
    super('menu');
  }

  public getMenu = (): PizzaDTO[] => {
    // todo
    // add dummy data
  };
}
