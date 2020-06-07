import { currences } from './../constants/currences';
import { IRootState } from './../../store/state';
import { useSelector } from 'react-redux';

export const useCurrency = () => {
  const { current } = useSelector((state: IRootState) => state.currency);

  return {
    current,
    symbol: currences[current],
  };
};
