import { Currency } from './../../shared/types/Currency';
import * as types from './types';

export const currencyActions = {
  rememberCurrency: () => ({
    type: types.CURRENCY_REMEMBER,
  }),

  setCurrent: (payload: Currency) => ({
    type: types.CURRENCY_SET_CURRENT,
    payload,
  }),
};
