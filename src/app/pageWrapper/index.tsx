import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CartButton } from '../../shared/components/cartButton';
import * as pathes from '../../shared/constants/pathes';
import { IRootState } from '../../store/state';
import { cartActions } from '../cart/actions';
import { Currency } from '../currency';
import './index.css';

interface IPageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: IPageWrapperProps) => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state: IRootState) => state.cart);

  useEffect(() => {
    if (orders.length === 0 && localStorage.getItem('orders')) {
      dispatch(cartActions.rememberOrders());
    }
  }, [dispatch, orders.length]);

  return (
    <div className='page-wrapper'>
      <header className='page-wrapper__header'>
        <div className='container'>
          <NavLink to={pathes.ROOT}>
            <img
              src='./images/logo.svg'
              alt='logo'
              className='page-wrapper__header__logo'
            />
          </NavLink>

          <div className='page-wrapper__header__control-block'>
            <Currency />
            <CartButton />
            <button className='login-button secondary-button'>Login</button>
          </div>
        </div>
      </header>
      <main className='page-wrapper__main'>{children}</main>
      <footer className='page-wrapper__footer'>
        <div className='container'></div>
      </footer>
    </div>
  );
};
