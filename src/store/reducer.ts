import { CurrencyReducer } from './../app/currency/reducer';
import { combineReducers } from 'redux';
import { CartReducer } from '../app/cart/reducer';
import { MenuReducer } from '../app/menu/reducer';
import { IRootState } from './state';

export const rootReducer = combineReducers<IRootState>({
  menu: MenuReducer.Create(),
  cart: CartReducer.Create(),
  currency: CurrencyReducer.Create(),
});
