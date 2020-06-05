import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../shared/components/container';
import { Order } from '../../shared/components/order';
import { IRootState } from '../../store/state';
import './index.css';
import { OptionsEnum } from '../../shared/types/OptionsEnum';
import { cartActions } from './actions';
import { NavLink } from 'react-router-dom';

export const Cart = () => {
  const dispatch = useDispatch();

  const { orders, isFetching, error, total } = useSelector(
    (state: IRootState) => state.cart,
  );

  const isEmpty = orders.length === 0;

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
      return <p className='cart__no-pizza'>There are no pizza yet</p>;
    }

    return orders.map((item, index) => (
      <Order
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        record={item}
        key={index}
      />
    ));
  };

  return (
    <Container isFetching={isFetching} error={error} className='cart'>
      <h2>Cart</h2>
      {renderOrders()}

      {(!isEmpty && (
        <>
          <h2 className='cart__total-title'>
            Total: <span className='cart__price--eur'>{total.eur}&#8364;</span>
          </h2>
          <p className='cart__price--usd'>or {total.usd}&#36;</p>
          <div className='cart__controls'>
            <button className='primary-button--active'>Order</button>
            <NavLink to='/'>
              <button className='secondary-button'>Back to menu</button>
            </NavLink>
          </div>
        </>
      )) || (
        <NavLink to='/'>
          <button className='secondary-button'>Back to menu</button>
        </NavLink>
      )}
    </Container>
  );
};
