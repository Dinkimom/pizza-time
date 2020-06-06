import React, { ButtonHTMLAttributes } from 'react';
import './index.css';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  primary?: boolean;
  active?: boolean;
}

export const Button = ({
  loading,
  primary,
  active,
  className,
  children,
  disabled,
  ...props
}: IButtonProps) => {
  return (
    <button
      className={`button ${primary ? 'primary-button' : ''} ${
        active ? 'primary-button primary-button--active' : ''
      } ${loading ? 'loading' : ''} ${className ? className : ''}`}
      {...props}
      disabled={disabled || loading}
    >
      <span className='button__inner'>{children}</span>
      <div className={`button__loader`}>
        <span className='dot'></span>
        <span className='dot'></span>
        <span className='dot'></span>
      </div>
    </button>
  );
};
