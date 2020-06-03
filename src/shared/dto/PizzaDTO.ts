export interface PizzaDTO {
  id: string;
  name: string;
  options: {
    price: {
      usd: number;
      eur: number;
    };
    weight: number;
  }[];
}
