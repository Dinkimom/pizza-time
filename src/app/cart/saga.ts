import { put, takeEvery } from 'redux-saga/effects';
import { safeSagaExecute } from '../../middleware/saga';
import { orderClient } from './../../index';
import { ConfirmOderDTO } from './../../shared/dto/ConfirmOrderDTO';
import { IActionPayloaded } from './../../store/IAction';
import { cartActions } from './actions';
import * as types from './types';

export class CartApiSaga {
  public constructor() {
    this.confirm = this.confirm.bind(this);
  }

  public static Initialize() {
    const saga = new CartApiSaga();
    return saga.watch();
  }

  public *watch() {
    yield takeEvery(types.CART_CONFIRM, (a) =>
      safeSagaExecute(a, this.confirm),
    );
  }

  public *confirm(action: IActionPayloaded<ConfirmOderDTO>) {
    yield put(cartActions.setFetching(true));

    try {
      const response = yield orderClient.confirmOrder(action.payload);

      if (response.success) {
        yield put(cartActions.confirmSuccess());
      } else {
        yield put(cartActions.confirmError());
      }
    } catch (error) {
      yield put(cartActions.setError(error.message));
    }

    yield put(cartActions.setFetching(false));
  }
}
