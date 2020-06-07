import { PizzaDTO } from './../../shared/dto/PizzaDTO';
import * as types from './types';

export const menuActions = {
  loadData: () => ({
    type: types.MENU_LOAD_DATA,
  }),

  dataLoaded: (payload: PizzaDTO[]) => ({
    type: types.MENU_DATA_LOADED,
    payload,
  }),

  openPizza: (payload: string) => ({
    type: types.MENU_OPEN_PIZZA,
    payload,
  }),

  closePizza: () => ({
    type: types.MENU_CLOSE_PIZZA,
  }),

  setFetching: (payload: boolean) => ({
    type: types.MENU_SET_FETCHING,
    payload,
  }),

  setError: (payload: string) => ({
    type: types.MENU_SET_ERROR,
    payload,
  }),
};
