import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currences } from '../../shared/constants/currences';
import { CurrencyName } from '../../shared/types/CurrencyName';
import { IRootState } from '../../store/state';
import { currencyActions } from './actions';
import './index.css';

export const Currency = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currencyActions.rememberCurrency());
  }, [dispatch]);

  const { current } = useSelector((state: IRootState) => state.currency);

  const handleChange = (currency: CurrencyName) => {
    dispatch(currencyActions.setCurrent(currency));
  };

  const keys = Object.keys(currences) as CurrencyName[];

  return (
    <div className='currency'>
      {Object.values(currences).map((item, index) => (
        <span
          key={index}
          className={`${current === keys[index] ? 'active' : ''}`}
          onClick={() => handleChange(keys[index])}
        >
          {item}
        </span>
      ))}
    </div>
  );
};
