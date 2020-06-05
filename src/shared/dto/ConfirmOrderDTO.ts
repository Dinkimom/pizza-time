import { OrderDTO } from './OrderDTO';
export interface ConfirmOderDTO {
  street: string;
  house: number;
  porch: number;
  floor: number;
  order: OrderDTO[];
}
