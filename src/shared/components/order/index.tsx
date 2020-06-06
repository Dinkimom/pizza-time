import React from 'react';
import { OrderDTO } from '../../dto/OrderDTO';
import { useCurrency } from '../../hooks/useCurrency';
import { useImages } from '../../hooks/useImages';
import { OptionsEnum } from '../../types/OptionsEnum';
import './index.css';
import trashIcon from './trash.svg';

interface IOrderProps {
  record: OrderDTO;
  disabled?: boolean;
  onIncrement?: (id: string, option: OptionsEnum) => void;
  onDecrement?: (id: string, option: OptionsEnum) => void;
  onRemove?: (id: string, option: OptionsEnum) => void;
  history?: boolean;
}

export const Order = ({
  record,
  onIncrement,
  onDecrement,
  onRemove,
  disabled,
  history,
}: IOrderProps) => {
  const currency = useCurrency();

  const { size, weight, price } = record.pizza.options[record.option];

  const pizzaImage = useImages(record.pizza.id);

  return (
    <div className='order'>
      <img src={pizzaImage} alt={record.pizza.name} className='order__image' />
      <div className='order__info'>
        <p className='order__info__name'>{record.pizza.name}</p>
        <p className='order__info__details'>
          {size}cm, {weight}g
        </p>
      </div>
      {history ? (
        <span className='order__quantity'>{record.quantity} pc.</span>
      ) : (
        <div className='order__controls'>
          <button
            className='primary-button'
            onClick={() =>
              onDecrement && onDecrement(record.pizza.id, record.option)
            }
          >
            &#8722;
          </button>
          <span className='order__controls__quantity'>{record.quantity}</span>
          <button
            className='primary-button'
            onClick={() =>
              onIncrement && onIncrement(record.pizza.id, record.option)
            }
            disabled={disabled}
          >
            &#43;
          </button>
        </div>
      )}

      <p className='order__price'>
        {price[currency.current] * record.quantity}
        {currency.symbol}
      </p>

      {history ? null : (
        <img
          src={trashIcon}
          alt='remove'
          className='order__remove'
          onClick={() => onRemove && onRemove(record.pizza.id, record.option)}
        />
      )}
    </div>
  );
};
