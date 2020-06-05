import React from 'react';
import { OrderDTO } from '../../dto/OrderDTO';
import './index.css';
import trashIcon from './trash.svg';
import { OptionsEnum } from '../../types/OptionsEnum';

interface IOrderProps {
  record: OrderDTO;
  onIncrement: (id: string, option: OptionsEnum) => void;
  onDecrement: (id: string, option: OptionsEnum) => void;
  onRemove: (id: string, option: OptionsEnum) => void;
}

export const Order = ({
  record,
  onIncrement,
  onDecrement,
  onRemove,
}: IOrderProps) => {
  const { size, weight, price } = record.pizza.options[record.option];

  return (
    <div className='order'>
      <img
        src='./images/pizza.png'
        alt={record.pizza.name}
        className='order__image'
      />
      <div className='order__info'>
        <p className='order__info__name'>{record.pizza.name}</p>
        <p className='order__info__details'>
          {size}sm, {weight}g
        </p>
      </div>
      <div className='order__controls'>
        <button
          className='primary-button--active'
          onClick={() => onDecrement(record.pizza.id, record.option)}
        >
          &#8722;
        </button>
        <span className='order__contorls__quantity'>{record.quantity}</span>
        <button
          className='primary-button--active'
          onClick={() => onIncrement(record.pizza.id, record.option)}
        >
          &#43;
        </button>
      </div>

      <p className='order__price'>{price.eur}&#8364;</p>

      <img
        src={trashIcon}
        alt='remove'
        className='order__remove'
        onClick={() => onRemove(record.pizza.id, record.option)}
      />
    </div>
  );
};
