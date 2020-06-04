import React, { ReactNode } from 'react';
import './index.css';
import closeIcon from './close-icon.svg';

interface IModalProps {
  isOpened: boolean;
  onClose: (...args: any) => void;
  children: ReactNode;
  className?: string;
}

export const Modal = ({
  children,
  isOpened,
  className,
  onClose,
}: IModalProps) => {
  return (
    <div className={`modal ${isOpened ? '' : 'none'}`} onClick={onClose}>
      <div
        className={`modal__body ${className ? className : ''}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img
          src={closeIcon}
          alt='close'
          className='modal__body__close-icon'
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};
