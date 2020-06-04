import React from 'react';
import './index.css';

interface IErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: IErrorMessageProps) => (
  <div className='error-message'>
    <span>!</span>
    <p>{message}</p>
  </div>
);
