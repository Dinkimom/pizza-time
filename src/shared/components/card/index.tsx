import React from 'react';
import { PizzaDTO } from '../../dto/PizzaDTO';
import './index.css';

interface ICardProps {
  handleClick: Function;
  record: PizzaDTO;
}

export const Card = ({ handleClick, record }: ICardProps) => {
  return (
    <div className='card'>
      <img src='./images/pizza.png' alt={record.name} className='card__image' />
      <p className='card__name'>{record.name}</p>
      <p className='card__description'>{record.description}</p>
      <div className='card__footer'>
        <p className='card__footer__price'>
          Starts from {record.options[0].price.eur}&#8364;
        </p>
        <button className='primary-button'>Choose</button>
      </div>
    </div>
  );
};
