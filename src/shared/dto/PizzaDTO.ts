import { ICurrency } from '../types/ICurrency';

export interface PizzaDTO {
  id: string;
  name: string;
  description: string;
  options: {
    price: ICurrency;
    weight: number;
    size: number;
  }[];
}
