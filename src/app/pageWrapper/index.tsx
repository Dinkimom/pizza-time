import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CART } from '../../shared/constants/pathes';
import './index.css';

interface IPageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: IPageWrapperProps) => {
  const { pathname } = useLocation();

  const isCartPath = pathname === CART;

  return (
    <div className='page-wrapper'>
      <header className='page-wrapper__header'>
        <div className='container'>
          <Link to='/'>
            <img
              src='./images/logo.svg'
              alt='logo'
              className='page-wrapper__header__logo'
            />
          </Link>
          <div className='page-wrapper__header__control-block'>
            <button
              className={`cart-button primary-button ${
                isCartPath ? 'none' : null
              }`}
            >
              Cart
            </button>
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
