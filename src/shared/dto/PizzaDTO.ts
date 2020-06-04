export interface PizzaDTO {
  id: string;
  name: string;
  description: string;
  options: {
    price: {
      usd: number;
      eur: number;
    };
    weight: number;
    size: number;
  }[];
}
