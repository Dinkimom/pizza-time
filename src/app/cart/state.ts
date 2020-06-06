import { ResponseTypesEnum } from './../../shared/types/ResponseTypesEnum';
import { ICurrency } from './../../shared/types/ICurrency';
import { OrderDTO } from './../../shared/dto/OrderDTO';

export interface ICartState {
  orders: OrderDTO[];
  isFetching: boolean;
  error: string;
  total: ICurrency;
  quantity: number;
  deliveryCost: ICurrency;
  isOpened: boolean;
  isModalFetching: boolean;
  response: ResponseTypesEnum;
}
