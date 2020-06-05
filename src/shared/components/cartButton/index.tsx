import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IRootState } from '../../../store/state';
import * as pathes from '../../constants/pathes';
import './index.css';

export const CartButton = () => {
  const { orders } = useSelector((state: IRootState) => state.cart);

  const renderInner = () => {
    if (orders.length === 0) {
      return <p className='cart-button__text fluid'>Cart</p>;
    } else {
      let quantity = 0;

      orders.forEach((item) => {
        quantity = quantity + item.quantity;
      });

      return (
        <>
          <p className='cart-button__quantity'>{quantity}</p>
          <p className='cart-button__text'>Cart</p>
        </>
      );
    }
  };

  return (
    <NavLink to={pathes.CART} activeClassName='none'>
      <button className='cart-button primary-button'>{renderInner()}</button>
    </NavLink>
  );
};
