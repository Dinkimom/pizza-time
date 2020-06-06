import { CurrencyName } from './../../shared/types/CurrencyName';
import * as types from './types';

export const currencyActions = {
  rememberCurrency: () => ({
    type: types.CURRENCY_REMEMBER,
  }),

  setCurrent: (payload: CurrencyName) => ({
    type: types.CURRENCY_SET_CURRENT,
    payload,
  }),
};
