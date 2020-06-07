import { ICurrency } from '../types/ICurrency';
import { OrderDTO } from './OrderDTO';

export interface HistoryDTO {
  date: Date;
  order: OrderDTO[];
  total: ICurrency;
}
