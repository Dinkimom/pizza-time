import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../../shared/components/container';
import { Order } from '../../shared/components/order';
import { IRootState } from '../../store/state';
import './index.css';
import { OptionsEnum } from '../../shared/types/OptionsEnum';
import { cartActions } from './actions';

export const Cart = () => {
  const dispatch = useDispatch();

  const { orders, isFetching, error } = useSelector(
    (state: IRootState) => state.cart,
  );

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
    if (orders.length === 0) {
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

      <h2>Total</h2>
    </Container>
  );
};
