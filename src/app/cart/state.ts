import { OrderDTO } from './../../shared/dto/OrderDTO';
export interface ICartState {
  orders: OrderDTO[];
  isFetching: boolean;
  error: string;
  success: boolean | null;
}
