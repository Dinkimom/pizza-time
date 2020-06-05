import { HistoryDTO } from './../dto/HistoryDTO';
export const userHistory = [
  {
    date: new Date(),
    order: [
      {
        pizza: {
          id: '2',
          name: 'Pepperoni',
          description: 'Some very important description of pizza',
          options: [
            { price: { usd: 10, eur: 8 }, weight: 300, size: 25 },
            { price: { usd: 12, eur: 10 }, weight: 500, size: 30 },
            { price: { usd: 15, eur: 13 }, weight: 700, size: 35 },
          ],
        },
        option: 0,
        quantity: 3,
      },
    ],
    total: {
      eur: 24,
      usd: 30,
    },
  },
] as HistoryDTO[];
