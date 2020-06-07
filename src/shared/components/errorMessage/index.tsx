import React from 'react';
import './index.css';

interface IErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: IErrorMessageProps) => (
  <p className='error-message'>{message}</p>
);
