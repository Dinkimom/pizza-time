import { OrderDTO } from './OrderDTO';

export interface UserDTO {
  id: string;
  orders: OrderDTO[][];
}
