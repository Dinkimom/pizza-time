import { put, takeEvery } from 'redux-saga/effects';
import { safeSagaExecute } from '../../middleware/saga';
import { menuClient } from './../../index';
import { menuActions } from './actions';
import * as types from './types';

export class MenuApiSaga {
  public constructor() {}

  public static Initialize() {
    const saga = new MenuApiSaga();
    return saga.watch();
  }

  public *watch() {
    yield takeEvery(types.MENU_LOAD_DATA, (a) =>
      safeSagaExecute(a, this.loadData),
    );
  }

  public *loadData() {
    yield put(menuActions.setFetching(true));

    try {
      const response = yield menuClient.getMenu();

      yield put(menuActions.dataLoaded(response));
    } catch (error) {
      yield put(menuActions.setError(error.message));
    }

    yield put(menuActions.setFetching(false));
  }
}
