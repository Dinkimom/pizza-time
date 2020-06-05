import { ResponseTypesEnum } from './../../shared/types/ResponseTypesEnum';
import { ICurrency } from './../../shared/types/ICurrency';
import { OrderDTO } from './../../shared/dto/OrderDTO';

export interface ICartState {
  orders: OrderDTO[];
  isFetching: boolean;
  error: string;
  response: ResponseTypesEnum;
  total: ICurrency;
  quantity: number;
  deliveryCost: ICurrency;
}
