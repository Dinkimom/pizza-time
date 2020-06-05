import { PizzaDTO } from './PizzaDTO';
import { OptionsEnum } from './../types/OptionsEnum';

export interface OrderDTO {
  pizza: PizzaDTO;
  option: OptionsEnum;
  quantity: number;
}
