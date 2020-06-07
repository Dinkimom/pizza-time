import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CartButton } from '../../shared/components/cartButton';
import { LoginButton } from '../../shared/components/loginButton';
import * as pathes from '../../shared/constants/pathes';
import { cartActions } from '../cart/actions';
import { ConfirmModal } from '../confirmModal';
import { Currency } from '../currency';
import { LoginModal } from '../loginModal';
import './index.css';
import logo from './logo.svg';

interface IPageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: IPageWrapperProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.rememberOrders());
  }, [dispatch]);

  return (
    <div className='page-wrapper'>
      <header className='page-wrapper__header'>
        <div className='container'>
          <NavLink to={pathes.ROOT}>
            <img src={logo} alt='logo' className='page-wrapper__header__logo' />
          </NavLink>

          <div className='page-wrapper__header__control-block'>
            <Currency />
            <CartButton />
            <LoginButton />
          </div>
        </div>
      </header>
      <main className='page-wrapper__main'>
        {children}
        <LoginModal />
        <ConfirmModal />
      </main>
      <footer className='page-wrapper__footer'>
        <div className='container'></div>
      </footer>
    </div>
  );
};
