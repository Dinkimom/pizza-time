import { OrderDTO } from './../../shared/dto/OrderDTO';
import { OptionsEnum } from './../../shared/types/OptionsEnum';
import * as types from './types';

export const cartActions = {
  rememberOrders: () => ({
    type: types.CART_REMEMBER_ORDERS,
  }),

  ordersRemembered: (payload: OrderDTO[]) => ({
    type: types.CART_ORDERS_REMEBERED,
    payload,
  }),

  incrementOrder: (payload: { id: string; option: OptionsEnum }) => ({
    type: types.CART_INCREMENT_ORDER,
    payload,
  }),

  decrementOrder: (payload: { id: string; option: OptionsEnum }) => ({
    type: types.CART_DECREMENT_ORDER,
    payload,
  }),

  removeOrder: (payload: { id: string; option: OptionsEnum }) => ({
    type: types.CART_REMOVE_ORDER,
    payload,
  }),

  addOrder: (payload: OrderDTO) => ({
    type: types.CART_ADD_ORDER,
    payload,
  }),

  setFetching: (payload: boolean) => ({
    type: types.CART_SET_FETCHING,
    payload,
  }),

  setError: (payload: string) => ({
    type: types.CART_SET_ERROR,
    payload,
  }),

  confirm: (payload: OrderDTO[]) => ({
    type: types.CART_CONFIRM,
    payload,
  }),

  confirmSuccess: () => ({
    type: types.CART_CONFIRM_SUCCESS,
  }),

  confirmError: () => ({
    type: types.CART_CONFIRM_ERROR,
  }),
};
