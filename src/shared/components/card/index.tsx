import React from 'react';
import { PizzaDTO } from '../../dto/PizzaDTO';
import { useCurrency } from '../../hooks/useCurrency';
import { useImages } from '../../hooks/useImages';
import { Button } from '../button';
import { Image } from '../image';
import './index.css';

interface ICardProps {
  handleClick: (...args: any) => void;
  record: PizzaDTO;
}

export const Card = ({ handleClick, record }: ICardProps) => {
  const currency = useCurrency();

  const pizzaImage = useImages(record.id);

  return (
    <div className='card'>
      <div className='card__image'>
        <Image src={pizzaImage} alt={record.name} />
      </div>

      <p className='card__name'>{record.name}</p>
      <p className='card__description'>{record.description}</p>
      <div className='card__footer'>
        <p className='card__footer__price'>
          From {record.options[0].price[currency.current]}
          {currency.symbol}
        </p>
        <Button primary={true} onClick={handleClick}>
          Choose
        </Button>
      </div>
    </div>
  );
};
