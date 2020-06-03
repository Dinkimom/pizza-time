import { OptionsEnum } from './../types/OptionsEnum';

export interface OrderDTO {
  pizza_id: string;
  option: OptionsEnum;
  quantity: number;
}
