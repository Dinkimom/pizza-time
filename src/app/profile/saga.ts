import { put, takeEvery } from 'redux-saga/effects';
import { safeSagaExecute } from '../../middleware/saga';
import { orderClient, userClient } from './../../index';
import { LoginDTO } from './../../shared/dto/LoginDTO';
import { IActionPayloaded } from './../../store/IAction';
import { profileActions } from './actions';
import * as types from './types';

export class ProfileApiSaga {
  public constructor() {
    this.login = this.login.bind(this);
  }

  public static Initialize() {
    const saga = new ProfileApiSaga();
    return saga.watch();
  }

  public *watch() {
    yield takeEvery(types.PROFILE_LOGIN, (a) => safeSagaExecute(a, this.login));
  }

  public *login(action: IActionPayloaded<LoginDTO>) {
    yield put(profileActions.setFetching(true));

    try {
      const response = yield userClient.login(action.payload);

      if (response.success) {
        yield put(profileActions.loginSucces(response.data));
      } else {
        yield put(profileActions.loginError());
      }
    } catch (error) {
      yield put(profileActions.setError(error.message));
    }

    yield put(profileActions.setFetching(true));
  }

  public *loadHistory(action: IActionPayloaded<string>) {
    yield put(profileActions.setFetching(true));

    try {
      const response = yield orderClient.getOrders(action.payload);

      if (response.success) {
        yield put(profileActions.historyLoaded(response.data));
      }
    } catch (error) {
      yield put(profileActions.setError(error.message));
    }

    yield put(profileActions.setFetching(true));
  }
}
