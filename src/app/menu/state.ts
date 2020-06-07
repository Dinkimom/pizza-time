import { PizzaDTO } from './../../shared/dto/PizzaDTO';

export interface IMenuState {
  list: PizzaDTO[];
  currentPizza: PizzaDTO | null;
  isFetching: boolean;
  error: string;
}
