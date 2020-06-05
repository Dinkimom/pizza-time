import React from 'react';
import { PizzaDTO } from '../../dto/PizzaDTO';
import './index.css';
import { useCurrency } from '../../hooks/useCurrency';

interface ICardProps {
  handleClick: (...args: any) => void;
  record: PizzaDTO;
}

export const Card = ({ handleClick, record }: ICardProps) => {
  const currency = useCurrency();

  return (
    <div className='card'>
      <div className='card__image'>
        <img src='./images/pizza.png' alt={record.name} />
      </div>

      <p className='card__name'>{record.name}</p>
      <p className='card__description'>{record.description}</p>
      <div className='card__footer'>
        <p className='card__footer__price'>
          From {record.options[0].price[currency.current]}
          {currency.symbol}
        </p>
        <button className='primary-button' onClick={handleClick}>
          Choose
        </button>
      </div>
    </div>
  );
};
