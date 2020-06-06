import { pizzas } from './pizzas';
import { HistoryDTO } from './../dto/HistoryDTO';
import { OptionsEnum } from '../types/OptionsEnum';
export const userHistory = [
  {
    date: new Date(),
    order: [
      {
        pizza: pizzas[0],
        option: OptionsEnum.Small,
        quantity: 2,
      },
    ],
    total: {
      eur: 24,
      usd: 30,
    },
  },
  {
    date: new Date(),
    order: [
      {
        pizza: pizzas[0],
        option: OptionsEnum.Small,
        quantity: 2,
      },
      {
        pizza: pizzas[0],
        option: OptionsEnum.Medium,
        quantity: 2,
      },
    ],
    total: {
      eur: 24,
      usd: 30,
    },
  },
  {
    date: new Date(),
    order: [
      {
        pizza: pizzas[0],
        option: OptionsEnum.Small,
        quantity: 2,
      },
      {
        pizza: pizzas[0],
        option: OptionsEnum.Medium,
        quantity: 2,
      },
    ],
    total: {
      eur: 24,
      usd: 30,
    },
  },
] as HistoryDTO[];
