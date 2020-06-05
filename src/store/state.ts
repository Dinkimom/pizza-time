import { ICartState } from './../app/cart/state';
import { IMenuState } from '../app/menu/state';

export interface IRootState {
  menu: IMenuState;
  cart: ICartState;
}
