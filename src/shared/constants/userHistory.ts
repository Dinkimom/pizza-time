import { pizzas } from './pizzas';
import { HistoryDTO } from './../dto/HistoryDTO';
export const userHistory = [
  {
    date: new Date(),
    order: [
      {
        pizza: pizzas[0],
      },
    ],
    total: {
      eur: 24,
      usd: 30,
    },
  },
] as HistoryDTO[];
