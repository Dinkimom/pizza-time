import React, { ReactNode } from 'react';
import { ErrorMessage } from '../errorMessage';
import { Loader } from '../loader';
import './index.css';

interface IContainerProps {
  children: ReactNode;
  isFetching: boolean;
  error: string;
  className?: string;
}

export const Container = ({
  children,
  isFetching,
  error,
  className,
}: IContainerProps) => {
  const renderChildren = () => {
    if (error) {
      return <ErrorMessage message={error} />;
    }

    if (isFetching) {
      return <Loader text='Loading' />;
    }

    return children;
  };

  return (
    <div className={`container ${className ? className : ''}`}>
      {renderChildren()}
    </div>
  );
};
