import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IRootState } from '../../../store/state';
import * as pathes from '../../constants/pathes';
import './index.css';
import { Button } from '../button';

export const CartButton = () => {
  const { quantity, isFetching } = useSelector(
    (state: IRootState) => state.cart,
  );

  const renderInner = () => {
    if (quantity === 0) {
      return <p className='cart-button__text empty'>Cart</p>;
    } else {
      return (
        <>
          <p className='cart-button__text'>Cart</p>
          <div className='cart-button__divider'></div>
          <p className='cart-button__quantity'>{quantity}</p>
          <span className='cart-button__arrow'>&#8594;</span>
        </>
      );
    }
  };

  return (
    <NavLink to={pathes.CART} activeClassName='none'>
      <Button loading={isFetching} active={true} className='cart-button'>
        {renderInner()}
      </Button>
    </NavLink>
  );
};
