import { ICurrency } from './../../shared/types/ICurrency';
import { OrderDTO } from './../../shared/dto/OrderDTO';

export interface ICartState {
  orders: OrderDTO[];
  isFetching: boolean;
  error: string;
  success: boolean | null;
  total: ICurrency;
  quantity: number;
  deliveryCost: ICurrency;
}
