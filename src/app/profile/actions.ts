import { UserDTO } from './../../shared/dto/UserDTO';
import { LoginDTO } from './../../shared/dto/LoginDTO';
import * as types from './types';

export const profileActions = {
  login: (payload: LoginDTO) => ({
    type: types.PROFILE_LOGIN,
    payload,
  }),

  loginSucces: (payload: UserDTO) => ({
    type: types.PROFILE_LOGIN_SUCCESS,
    payload,
  }),

  loginError: () => ({
    type: types.PROFILE_LOGIN_ERROR,
  }),

  loadHistory: (payload: string) => ({
    type: types.PROFILE_LOAD_HISTORY,
    payload,
  }),

  historyLoaded: (payload: string) => ({
    type: types.PROFILE_HISTORY_LOADED,
    payload,
  }),

  logout: () => ({
    type: types.PROFILE_LOGIN,
  }),

  setFetching: (payload: boolean) => ({
    type: types.PROFILE_SET_FETCHING,
    payload,
  }),

  setError: (payload: string) => ({
    type: types.PROFILE_SET_ERROR,
    payload,
  }),

  openModal: () => ({
    type: types.PROFILE_OPEN_MODAL,
  }),

  closeModal: () => ({
    type: types.PROFILE_CLOSE_MODAL,
  }),
};
