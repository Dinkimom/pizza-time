import { IActionPayloaded } from '../../store/IAction';
import { IReducerPayloaded } from '../../store/IReducer';
import { IMenuState } from './state';
import * as types from './types';

const initialState: IMenuState = {
  list: [],
  currentPizza: null,
  isFetching: false,
  error: '',
};

export class MenuReducer implements IReducerPayloaded<IMenuState> {
  constructor() {
    this.reduce = this.reduce.bind(this);
  }

  public static Create() {
    const reducer = new MenuReducer();
    return reducer.reduce;
  }

  public reduce(
    state: IMenuState = initialState,
    action: IActionPayloaded<any>,
  ): IMenuState {
    let newState = { ...state };

    switch (action.type) {
      case types.MENU_DATA_LOADED:
        newState.list = [...action.payload];
        break;
      case types.MENU_OPEN_PIZZA:
        newState.currentPizza = newState.list.filter(
          (item) => action.payload === item.id,
        )[0];
        break;
      case types.MENU_CLOSE_PIZZA:
        newState.currentPizza = null;
        break;
      case types.MENU_SET_FETCHING:
        newState.isFetching = action.payload;
        break;
      case types.MENU_SET_ERROR:
        newState.isFetching = action.payload;
        break;
    }

    return newState;
  }
}
