import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../shared/components/container';
import { Order } from '../../shared/components/order';
import { IRootState } from '../../store/state';
import './index.css';
import { OptionsEnum } from '../../shared/types/OptionsEnum';
import { cartActions } from './actions';
import { NavLink } from 'react-router-dom';
import { maxOrdersCount } from '../../shared/constants/maxOrdersCount';
import { useCurrency } from '../../shared/hooks/useCurrency';
import { currences } from '../../shared/constants/currences';
import { Button } from '../../shared/components/button';

export const Cart = () => {
  const dispatch = useDispatch();

  const {
    orders,
    isFetching,
    error,
    total,
    quantity,
    deliveryCost,
  } = useSelector((state: IRootState) => state.cart);

  const isEmpty = orders.length === 0;

  const isLimitReached = quantity === maxOrdersCount;

  const currency = useCurrency();

  const handleIncrement = (id: string, option: OptionsEnum) => {
    dispatch(cartActions.incrementOrder({ id, option }));
  };

  const handleDecrement = (id: string, option: OptionsEnum) => {
    dispatch(cartActions.decrementOrder({ id, option }));
  };

  const handleRemove = (id: string, option: OptionsEnum) => {
    dispatch(cartActions.removeOrder({ id, option }));
  };

  const renderOrders = () => {
    if (isEmpty) {
      return <p className='cart__no-pizza'>There is no pizza yet</p>;
    }

    return orders.map((item, index) => (
      <Order
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        record={item}
        key={index}
        disabled={isLimitReached}
      />
    ));
  };

  return (
    <Container isFetching={isFetching} error={error} className='cart'>
      <h2>Cart</h2>
      {renderOrders()}

      {(!isEmpty && (
        <>
          <h3 className='cart__delivery'>
            Delivery:{' '}
            <span>
              {deliveryCost[currency.current]}
              {currency.symbol}
            </span>
          </h3>

          <h2 className='cart__total'>
            Total:{' '}
            <span>
              {total[currency.current]}
              {currency.symbol}
            </span>
          </h2>
          <p className='cart__price'>
            or {total[currency.current === 'eur' ? 'usd' : 'eur']}
            {currency.current === 'eur' ? currences.usd : currences.eur}
          </p>
          <div className='cart__controls'>
            <Button active={true}>Order</Button>
            <NavLink to='/'>
              <Button>Go to menu</Button>
            </NavLink>
          </div>
        </>
      )) || (
        <NavLink to='/'>
          <Button>Go to menu</Button>
        </NavLink>
      )}
    </Container>
  );
};
