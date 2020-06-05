import { OrderDTO } from './OrderDTO';

export interface HistoryDTO {
  date: Date;
  order: OrderDTO[];
}
