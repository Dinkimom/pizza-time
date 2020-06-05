import { IProfileState } from './../app/profile/state';
import { ICurrencyState } from './../app/currency/state';
import { ICartState } from './../app/cart/state';
import { IMenuState } from '../app/menu/state';
import { ICurrency } from '../shared/types/ICurrency';

export interface IRootState {
  menu: IMenuState;
  cart: ICartState;
  currency: ICurrencyState;
  profile: IProfileState;
}
