import { IActionPayloaded } from './../../store/IAction';
import { IReducerPayloaded } from './../../store/IReducer';
import { IProfileState } from './state';
import * as types from './types';
import { ResponseTypesEnum } from '../../shared/types/ResponseTypesEnum';

const initialState: IProfileState = {
  user: null,
  isFetching: false,
  error: '',
  response: ResponseTypesEnum.NotSubmitted,
  isOpened: false,
  history: [],
};

export class ProfileReducer implements IReducerPayloaded<IProfileState> {
  constructor() {
    this.reduce = this.reduce.bind(this);
  }

  public static Create() {
    const reducer = new ProfileReducer();
    return reducer.reduce;
  }

  public reduce(
    state: IProfileState = initialState,
    action: IActionPayloaded<any>,
  ): IProfileState {
    let newState = { ...state };

    switch (action.type) {
      case types.PROFILE_LOGIN_SUCCESS:
        newState.response = ResponseTypesEnum.Success;
        newState.user = action.payload;
        newState.isOpened = false;
        break;
      case types.PROFILE_LOGIN_ERROR:
        newState.response = ResponseTypesEnum.Error;
        break;
      case types.PROFILE_LOGOUT:
        newState.user = null;
        break;
      case types.PROFILE_SET_FETCHING:
        newState.isFetching = action.payload;
        break;
      case types.PROFILE_SET_ERROR:
        newState.error = action.payload;
        break;
      case types.PROFILE_HISTORY_LOADED:
        newState.history = [...action.payload];
        break;
      case types.PROFILE_OPEN_MODAL:
        newState.isOpened = true;
        break;
      case types.PROFILE_CLOSE_MODAL:
        newState.isOpened = false;
        break;
    }

    return newState;
  }
}
