import React from 'react';
import './index.css';
import loader from './loader.svg';

interface ILoaderProps {
  text?: string;
}

export const Loader = ({ text }: ILoaderProps) => (
  <div className='loader'>
    <img src={loader} alt='loader' className='loader__image' />
    {text && <p className='loader__text'>{text}</p>}
  </div>
);
