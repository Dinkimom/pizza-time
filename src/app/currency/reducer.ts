import { CurrencyName } from './../../shared/types/CurrencyName';
import { IActionPayloaded } from '../../store/IAction';
import { IReducerPayloaded } from '../../store/IReducer';
import { ICurrencyState } from './state';
import * as types from './types';

const initialState: ICurrencyState = {
  current: 'eur',
};

export class CurrencyReducer implements IReducerPayloaded<ICurrencyState> {
  constructor() {
    this.reduce = this.reduce.bind(this);
  }

  public static Create() {
    const reducer = new CurrencyReducer();
    return reducer.reduce;
  }

  public reduce(
    state: ICurrencyState = initialState,
    action: IActionPayloaded<any>,
  ): ICurrencyState {
    let newState = { ...state };

    switch (action.type) {
      case types.CURRENCY_SET_CURRENT:
        newState.current = action.payload;
        localStorage.setItem('currency', action.payload);
        break;
      case types.CURRENCY_REMEMBER:
        newState.current = (localStorage.getItem('currency') ||
          'eur') as CurrencyName;
        break;
    }

    return newState;
  }
}
