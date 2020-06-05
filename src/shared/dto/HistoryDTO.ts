import { Currency } from './../types/Currency';
import { OrderDTO } from './OrderDTO';
import { ICurrency } from '../types/ICurrency';

export interface HistoryDTO {
  date: Date;
  order: OrderDTO[];
  total: ICurrency;
}
