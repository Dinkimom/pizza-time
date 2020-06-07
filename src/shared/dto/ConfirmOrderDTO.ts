import { OrderDTO } from './OrderDTO';
export interface ConfirmOderDTO {
  name: string;
  phone: string;
  street: string;
  house: string;
  porch?: string;
  floor?: string;
  flat?: string;
  order: OrderDTO[];
}
